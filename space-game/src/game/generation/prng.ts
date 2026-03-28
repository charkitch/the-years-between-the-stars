/** Mulberry32 — fast, deterministic 32-bit PRNG */
export class PRNG {
  private state: number;

  constructor(seed: number) {
    this.state = seed >>> 0;
  }

  /** Returns float in [0, 1) */
  next(): number {
    let t = (this.state += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** Int in [min, max] inclusive */
  int(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  /** Float in [min, max) */
  float(min: number, max: number): number {
    return this.next() * (max - min) + min;
  }

  /** Pick random element */
  pick<T>(arr: readonly T[]): T {
    return arr[Math.floor(this.next() * arr.length)];
  }

  /** Fork a child PRNG seeded from current state */
  fork(): PRNG {
    return new PRNG(Math.floor(this.next() * 0xFFFFFFFF));
  }

  /** Deterministically seed from an index */
  static fromIndex(baseSeed: number, index: number): PRNG {
    return new PRNG((baseSeed ^ (index * 0x9E3779B9)) >>> 0);
  }
}
