import { PRNG } from './prng';
import { GALAXY_SEED, GALAXY_SIZE, ECONOMY_TYPES, type EconomyType } from '../constants';

export interface StarSystemData {
  id: number;
  name: string;
  x: number;  // galaxy map coords [0..100]
  y: number;
  starType: 'G' | 'K' | 'M' | 'F' | 'A';
  economy: EconomyType;
  techLevel: number;  // 1–14
  population: number; // millions
}

const SYLLABLES_START = ['Ac', 'Be', 'Ce', 'Di', 'En', 'Fe', 'Ge', 'Hi', 'Is', 'Jo', 'Ka', 'La', 'Me', 'No', 'Or', 'Pa', 'Qu', 'Re', 'Si', 'Te', 'Ul', 'Ve', 'Wo', 'Xe', 'Za'];
const SYLLABLES_MID   = ['ar', 'bi', 'ce', 'da', 'et', 'fi', 'ge', 'ho', 'in', 'ja', 'ki', 'lo', 'ma', 'ni', 'on', 'pe', 'ri', 'sa', 'ti', 'un', 've'];
const SYLLABLES_END   = ['aar', 'ble', 'dis', 'eon', 'fis', 'gon', 'hus', 'ion', 'jex', 'kus', 'lis', 'mex', 'nis', 'oos', 'pus', 'rix', 'sus', 'tix', 'uun', 'vex'];

function generateName(rng: PRNG): string {
  const parts = rng.int(1, 2);
  let name = rng.pick(SYLLABLES_START);
  if (parts > 1) name += rng.pick(SYLLABLES_MID);
  name += rng.pick(SYLLABLES_END);
  return name;
}

const STAR_TYPES = ['G', 'K', 'M', 'F', 'A'] as const;
const STAR_WEIGHTS = [0.35, 0.25, 0.20, 0.12, 0.08];

function pickStarType(rng: PRNG): 'G' | 'K' | 'M' | 'F' | 'A' {
  const r = rng.next();
  let cumul = 0;
  for (let i = 0; i < STAR_WEIGHTS.length; i++) {
    cumul += STAR_WEIGHTS[i];
    if (r < cumul) return STAR_TYPES[i];
  }
  return 'G';
}

export function generateGalaxy(): StarSystemData[] {
  const rng = new PRNG(GALAXY_SEED);
  const systems: StarSystemData[] = [];
  const MIN_DIST = 8;

  let attempts = 0;
  while (systems.length < GALAXY_SIZE && attempts < 2000) {
    attempts++;
    const x = rng.float(5, 95);
    const y = rng.float(5, 95);

    // enforce min distance
    const tooClose = systems.some(s => {
      const dx = s.x - x;
      const dy = s.y - y;
      return Math.sqrt(dx * dx + dy * dy) < MIN_DIST;
    });
    if (tooClose) continue;

    const id = systems.length;
    const sysRng = PRNG.fromIndex(GALAXY_SEED, id);
    const starType = pickStarType(sysRng);
    const techLevel = sysRng.int(1, 14);
    const economy = sysRng.pick(ECONOMY_TYPES);

    systems.push({
      id,
      name: generateName(sysRng),
      x,
      y,
      starType,
      economy,
      techLevel,
      population: sysRng.int(10, 10000),
    });
  }

  return systems;
}
