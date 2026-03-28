import type { PoliticalType, GoodName } from '../constants';
import type { CivilizationState } from '../mechanics/CivilizationSystem';
import type { SystemChoices } from '../GameState';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface ChoiceEffect {
  tradingReputation?: number;   // -2 to +2
  bannedGoods?: GoodName[];
  priceModifier?: number;       // multiplier e.g. 0.85 or 1.25
  factionTag?: string;          // 'rebel_ally' | 'corp_ally' | 'gov_ally'
  creditsReward?: number;
  fuelReward?: number;
}

export interface EventChoice {
  id: string;
  label: string;
  description: string;
  effect: ChoiceEffect;
  requiresMinTech?: number;
  requiresCredits?: number;
}

export interface LandingEvent {
  id: string;
  title: string;
  narrativeLines: [string, string, string];
  choices: EventChoice[];   // 2–3 choices; always includes an ignore/decline option
  applicablePolitics?: PoliticalType[];
  minGalaxyYear?: number;
  requiredFactionTag?: string;
}

// ─── Events ──────────────────────────────────────────────────────────────────

export const LANDING_EVENTS: LandingEvent[] = [
  {
    id: 'REFUGEE_FLEET',
    title: 'REFUGEE FLEET',
    narrativeLines: [
      'A convoy of generation ships from a system you visited centuries ago drifts into the docking queue.',
      'The survivors carry cultural archives they believe you can authenticate — you were there, after all.',
      'A dignitary with hollow eyes approaches the ramp: "You remember what it was like. Please — tell them what we had."',
    ],
    choices: [
      {
        id: 'share_freely',
        label: 'Share your testimony freely',
        description: '+Reputation, CR 200 humanitarian stipend',
        effect: { tradingReputation: 2, creditsReward: 200 },
      },
      {
        id: 'sell_it',
        label: 'Sell the testimony to media brokers',
        description: '-Reputation, CR 800',
        effect: { tradingReputation: -2, creditsReward: 800 },
      },
      {
        id: 'decline',
        label: 'Plead ignorance and move on',
        description: 'No effect',
        effect: {},
      },
    ],
  },

  {
    id: 'ACQUISITION_PROPOSAL',
    title: 'ACQUISITION PROPOSAL',
    narrativeLines: [
      'A sleek representative from a megacorporation intercepts you at the airlock.',
      'They want to retain you as a historical courier — your longevity makes you an unrivalled chain of custody.',
      '"We can make it worth your while," she says, sliding a contract across the scanner.',
    ],
    applicablePolitics: ['Corporate State', 'Technocracy'],
    choices: [
      {
        id: 'sign_contract',
        label: 'Sign the courier contract',
        description: '+CR 1500, aligned with corporate interests',
        effect: { creditsReward: 1500, factionTag: 'corp_ally' },
      },
      {
        id: 'remain_independent',
        label: 'Remain independent',
        description: 'No effect',
        effect: {},
      },
    ],
  },

  {
    id: 'DOCKING_INSPECTION',
    title: 'DOCKING INSPECTION',
    narrativeLines: [
      'Priests in full ceremonial hazmat suits board before you can cycle the airlock.',
      'They cite the Purification Mandate — all vessels from "heathen epochs" must be spiritually cleansed.',
      'The levy is CR 400. You sense enforcement is entirely negotiable.',
    ],
    applicablePolitics: ['Theocracy'],
    choices: [
      {
        id: 'pay_levy',
        label: 'Pay the CR 400 levy',
        description: '+Reputation with local clergy',
        effect: { tradingReputation: 1, creditsReward: -400 },
        requiresCredits: 400,
      },
      {
        id: 'invoke_transit',
        label: 'Invoke ancient transit rights',
        description: '-Reputation, local prices +25%',
        effect: { tradingReputation: -1, priceModifier: 1.25 },
      },
      {
        id: 'bribe_quietly',
        label: 'Slide CR 200 into a collection plate',
        description: '+Reputation, cheaper than the levy',
        effect: { tradingReputation: 1, creditsReward: -200 },
        requiresCredits: 200,
      },
    ],
  },

  {
    id: 'THE_ARCHIVIST',
    title: 'THE ARCHIVIST',
    narrativeLines: [
      'A white-haired historian intercepts you at the dock café, recorder already running.',
      'She has spent forty years reconstructing the era you lived through from fragments.',
      '"You are the fragment," she says quietly. "Would you sit with me for an hour?"',
    ],
    choices: [
      {
        id: 'full_interview',
        label: 'Give a full interview, free of charge',
        description: '+Reputation ×2',
        effect: { tradingReputation: 2 },
      },
      {
        id: 'leave_nav_logs',
        label: 'Leave a copy of your navigation logs',
        description: '+Reputation',
        effect: { tradingReputation: 1 },
      },
      {
        id: 'charge_time',
        label: 'Charge your standard rate for your time',
        description: '-Reputation, CR 500',
        effect: { tradingReputation: -1, creditsReward: 500 },
      },
    ],
  },

  {
    id: 'DEAD_DROP_MESSAGE',
    title: 'DEAD DROP MESSAGE',
    narrativeLines: [
      'A maintenance bot delivers a data chip with no manifest number.',
      'It contains a resistance cell\'s plea: they need a courier who won\'t appear on modern databases.',
      'You are, in every formal sense, a ghost. They are counting on it.',
    ],
    applicablePolitics: ['Military Dictatorship', 'Stagnant Militancy'],
    choices: [
      {
        id: 'help_rebels',
        label: 'Accept the dead drop run',
        description: '+Reputation, local prices −15%',
        effect: { tradingReputation: 1, priceModifier: 0.85, factionTag: 'rebel_ally' },
      },
      {
        id: 'report_authorities',
        label: 'Report the cell to station security',
        description: 'CR 300 bounty, government aligned',
        effect: { creditsReward: 300, factionTag: 'gov_ally' },
      },
      {
        id: 'delete_message',
        label: 'Wipe the chip and forget it',
        description: 'No effect',
        effect: {},
      },
    ],
  },

  {
    id: 'UNREGULATED_MARKET',
    title: 'UNREGULATED MARKET',
    narrativeLines: [
      'Someone has set up shop in the maintenance ring — no permits, no inspectors, no questions.',
      'They\'re selling everything in bulk, dirt-cheap, but want immediate payment for the whole lot.',
      'The goods are unmanifested. This is either a great deal or evidence in a future trial.',
    ],
    applicablePolitics: ['Anarchist'],
    choices: [
      {
        id: 'buy_the_lot',
        label: 'Buy the entire lot (CR 600)',
        description: 'Prices −30% this port',
        effect: { creditsReward: -600, priceModifier: 0.70 },
        requiresCredits: 600,
      },
      {
        id: 'browse_carefully',
        label: 'Browse selectively',
        description: 'Prices −15% this port',
        effect: { priceModifier: 0.85 },
      },
      {
        id: 'skip_market',
        label: 'Walk past without stopping',
        description: 'No effect',
        effect: {},
      },
    ],
  },

  {
    id: 'MUSEUM_OF_ANCIENTS',
    title: 'MUSEUM OF THE ANCIENTS',
    narrativeLines: [
      'The curator of the System Heritage Museum has been waiting at your berth since 0400.',
      'The museum\'s centrepiece exhibit covers your home era. They want to add a living artefact.',
      '"We will display your ship\'s original components — with your permission, and proper compensation."',
    ],
    applicablePolitics: ['Technocracy', 'Democracy'],
    choices: [
      {
        id: 'sell_components',
        label: 'Sell old components to the museum',
        description: 'CR 1000, +1 fuel unit (new parts fitted)',
        effect: { creditsReward: 1000, fuelReward: 1 },
      },
      {
        id: 'donate_components',
        label: 'Donate the components',
        description: '+Reputation ×2, prices −20%',
        effect: { tradingReputation: 2, priceModifier: 0.80 },
      },
      {
        id: 'decline_museum',
        label: 'Decline politely',
        description: 'No effect',
        effect: {},
      },
    ],
  },

  {
    id: 'QUARANTINE_ADVISORY',
    title: 'QUARANTINE ADVISORY',
    narrativeLines: [
      'Station med-control broadcasts a tier-2 quarantine: a fast-mutating pathogen, origin unknown.',
      'Your ancient immune profile — pre-dating the standard inoculation series — could map the pathogen\'s lineage.',
      'The chief medical officer is requesting your bioscan data. Voluntarily. For now.',
    ],
    choices: [
      {
        id: 'release_freely',
        label: 'Release the bioscan data publicly',
        description: '+Reputation ×2, +2 fuel units (medical priority)',
        effect: { tradingReputation: 2, fuelReward: 2 },
      },
      {
        id: 'sell_data',
        label: 'Sell the data to a pharmaceutical corp',
        description: '-Reputation ×2, CR 1200',
        effect: { tradingReputation: -2, creditsReward: 1200 },
      },
      {
        id: 'deny_records',
        label: 'Claim your records were lost in transit',
        description: 'No effect',
        effect: {},
      },
    ],
  },

  {
    id: 'SECTOR_TOLL',
    title: 'SECTOR TOLL',
    narrativeLines: [
      'A gunship flags you down inside the docking envelope. The insignia is unfamiliar — local warlord, recent vintage.',
      '"Toll is five hundred credits. Historical vessels, double rate." The pilot seems to be reading from a card.',
      'You have been paying tolls since before this warlord\'s species existed.',
    ],
    applicablePolitics: ['Feudal', 'Military Dictatorship', 'Stagnant Militancy'],
    choices: [
      {
        id: 'pay_toll',
        label: 'Pay the CR 500 toll',
        description: 'Smooth passage',
        effect: { creditsReward: -500 },
        requiresCredits: 500,
      },
      {
        id: 'negotiate',
        label: 'Negotiate down to CR 200',
        description: 'Half-price toll',
        effect: { creditsReward: -200 },
        requiresCredits: 200,
      },
      {
        id: 'invoke_immunity',
        label: 'Invoke historical transit immunity (Article 7)',
        description: '-Reputation, prices +40% (they remember)',
        effect: { tradingReputation: -1, priceModifier: 1.40 },
      },
    ],
  },

  {
    id: 'THE_LINEAGE',
    title: 'THE LINEAGE',
    narrativeLines: [
      'A dockworker stops you cold: she is holding a photograph — old, printed, degraded at the edges.',
      'The person in the photograph is you. The date stamp is 4,200 years ago. She found it in her grandmother\'s estate.',
      '"Are you... related to them?" she whispers. The dock is very quiet.',
    ],
    minGalaxyYear: 5000,
    choices: [
      {
        id: 'reveal_truth',
        label: 'Tell her the truth',
        description: '+Reputation ×2 (she will tell everyone)',
        effect: { tradingReputation: 2 },
      },
      {
        id: 'claim_descent',
        label: 'Claim to be a distant descendant',
        description: '+Reputation, CR 100 (she insists on buying you a drink)',
        effect: { tradingReputation: 1, creditsReward: 100 },
      },
      {
        id: 'deny_lineage',
        label: 'Deny any connection',
        description: 'No effect',
        effect: {},
      },
    ],
  },
];

// ─── Event Selection ──────────────────────────────────────────────────────────

export function selectEvent(
  civState: CivilizationState,
  systemChoices: SystemChoices | undefined,
  seed: number,
): LandingEvent | null {
  const completedIds = systemChoices?.completedEventIds ?? [];
  const factionTag = systemChoices?.factionTag ?? null;

  const candidates = LANDING_EVENTS.filter(ev => {
    if (completedIds.includes(ev.id)) return false;
    if (ev.applicablePolitics && !ev.applicablePolitics.includes(civState.politics)) return false;
    if (ev.minGalaxyYear && civState.galaxyYear < ev.minGalaxyYear) return false;
    if (ev.requiredFactionTag && ev.requiredFactionTag !== factionTag) return false;
    return true;
  });

  if (candidates.length === 0) return null;

  const rng = new (class {
    private s: number;
    constructor(seed: number) { this.s = seed >>> 0; }
    next(): number {
      let t = (this.s += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
  })(seed);

  return candidates[Math.floor(rng.next() * candidates.length)];
}
