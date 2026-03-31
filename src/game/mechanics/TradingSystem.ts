import { PRNG } from '../generation/prng';
import {
  GOODS,
  MARKET_GOODS,
  CLUSTER_SEED,
  type GoodName,
  type EconomyType,
} from '../constants';
import type { CivilizationState } from './CivilizationSystem';
import type { SystemChoices } from '../GameState';

const BASE_PRICES: Record<GoodName, number> = {
  'Food':          40,
  'Textiles':      65,
  'Radioactives':  162,
  'Liquor':        220,
  'Luxuries':      440,
  'Narcotics':     490,
  'Computers':     853,
  'Combat Intelligence': 620,
};

const ECONOMY_MODIFIERS: Record<EconomyType, Partial<Record<GoodName, number>>> = {
  'Agricultural':     { Food: -20, Textiles: -15, Narcotics: +60 },
  'Industrial':       { Computers: -100, Textiles: -20, Food: +30 },
  'High Tech':        { Computers: -200, Radioactives: -40, Luxuries: -50 },
  'Rich Industrial':  { Computers: -150, Textiles: -30, Liquor: -30 },
  'Poor Agricultural':{ Food: -30, Luxuries: +100 },
  'Refinery':         { Radioactives: -60, Liquor: -40, Food: +20 },
};

const REPUTATION_SELL_BONUS_PER_POINT = 0.02;
const REPUTATION_DECAY_YEARS = 500;
const BOOM_CHANCE = 0.08;
const BOOM_SELL_MULTIPLIER = 3;
const BOOM_CYCLE_MIN_YEARS = 30;
const BOOM_CYCLE_MAX_YEARS = 80;
const SELL_MARGIN = 0.85;
const TECHNOCRACY_DISCOUNT = 0.90;
const NORMAL_VARIANCE = 0.15;
const ANARCHY_VARIANCE = 0.50;
const MAX_STOCK = 30;

export interface MarketEntry {
  good: GoodName;
  buyPrice: number;
  sellPrice: number;
  stock: number;
  banned: boolean;
  boom: boolean;
  buyable: boolean;
}

export class TradingSystem {
  /**
   * Return the good experiencing a boom in this system during the current
   * boom cycle window, or null if none. Deterministic per (systemId, window).
   */
  getMarketBoom(systemId: number, galaxyYear: number): GoodName | null {
    const cycleRng = PRNG.fromIndex(CLUSTER_SEED, systemId * 173);
    const cycleLength = cycleRng.int(BOOM_CYCLE_MIN_YEARS, BOOM_CYCLE_MAX_YEARS);
    const window = Math.floor(galaxyYear / cycleLength);
    const rng = PRNG.fromIndex(CLUSTER_SEED, systemId * 97 + window * 31);
    if (rng.float(0, 1) >= BOOM_CHANCE) return null;
    return rng.pick(MARKET_GOODS);
  }

  /**
   * Generate market prices with civilization and player-choice modifiers.
   *
   * When civState is provided the market uses the era-seeded PRNG and applies
   * political banned-goods, price modifiers, and anarchy variance.
   * When systemChoices is provided, accumulated player decisions (reputation,
   * per-system price multipliers) are also applied.
   */
  getMarket(
    systemId: number,
    economy: EconomyType,
    civState?: CivilizationState,
    systemChoices?: SystemChoices,
    galaxyYear?: number,
    lastVisitYear?: number,
  ): MarketEntry[] {
    const era = civState?.era ?? 0;
    const rng = PRNG.fromIndex(CLUSTER_SEED, systemId * 53 + 7 + era * 1000);

    const mods = ECONOMY_MODIFIERS[economy] ?? {};
    const civBanned: GoodName[] = civState?.bannedGoods ?? [];
    const choiceBanned: GoodName[] = systemChoices?.bannedGoods ?? [];
    const bannedGoods = new Set<GoodName>([...civBanned, ...choiceBanned]);

    const politicsMod = civState?.priceModifier ?? 1.0;
    const luxuryMod = civState?.luxuryMod ?? 1.0;
    const techBonus = new Set<GoodName>(civState?.techBonus ?? []);
    const anarchyVariance = civState?.anarchyVariance ?? false;
    const choiceMod = systemChoices?.priceModifier ?? 1.0;
    const yearsSinceVisit = (galaxyYear !== undefined && lastVisitYear !== undefined)
      ? galaxyYear - lastVisitYear
      : 0;
    const decayFactor = Math.max(0, 1 - yearsSinceVisit / REPUTATION_DECAY_YEARS);
    const effectiveRep = systemChoices
      ? systemChoices.tradingReputation * decayFactor
      : 0;
    const repBonus = 1.0 + effectiveRep * REPUTATION_SELL_BONUS_PER_POINT;
    const boomGood = galaxyYear !== undefined
      ? this.getMarketBoom(systemId, galaxyYear)
      : null;

    const buyableGoods = new Set<GoodName>(MARKET_GOODS);

    return GOODS.map(good => {
      const base = BASE_PRICES[good];
      const mod = mods[good] ?? 0;

      const maxVariance = anarchyVariance ? ANARCHY_VARIANCE : NORMAL_VARIANCE;
      const variance = rng.float(-maxVariance, maxVariance);

      let price = Math.round((base + mod) * (1 + variance));

      price = Math.round(price * politicsMod);
      if (good === 'Luxuries') price = Math.round(price * luxuryMod);
      if (techBonus.has(good)) price = Math.round(price * TECHNOCRACY_DISCOUNT);
      price = Math.round(price * choiceMod);

      const boom = good === boomGood;
      const buyable = buyableGoods.has(good);
      const buyPrice = buyable ? Math.max(1, price) : 0;
      const boomMod = boom ? BOOM_SELL_MULTIPLIER : 1;
      const sellPrice = Math.max(1, Math.round(price * SELL_MARGIN * repBonus * boomMod));
      const stock = buyable ? rng.int(0, MAX_STOCK) : 0;
      const banned = buyable && bannedGoods.has(good);

      return { good, buyPrice, sellPrice, stock, banned, boom, buyable };
    });
  }

  cargoTotal(cargo: Partial<Record<GoodName, number>>): number {
    return Object.values(cargo).reduce((sum, v) => sum + (v ?? 0), 0);
  }
}
