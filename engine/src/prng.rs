/// Mulberry32 — fast, deterministic 32-bit PRNG.
/// Exact port of src/game/generation/prng.ts to produce identical sequences.
pub struct PRNG {
    state: u32,
}

impl PRNG {
    pub fn new(seed: u32) -> Self {
        Self { state: seed }
    }

    /// Returns float in [0, 1)
    pub fn next(&mut self) -> f64 {
        self.state = self.state.wrapping_add(0x6D2B79F5);
        let mut t = self.state;
        t = (t ^ (t >> 15)).wrapping_mul(t | 1);
        t ^= t.wrapping_add((t ^ (t >> 7)).wrapping_mul(t | 61));
        ((t ^ (t >> 14)) as f64) / 4294967296.0
    }

    /// Int in [min, max] inclusive
    pub fn int(&mut self, min: i32, max: i32) -> i32 {
        let r = self.next();
        (r * (max - min + 1) as f64).floor() as i32 + min
    }

    /// Float in [min, max)
    pub fn float(&mut self, min: f64, max: f64) -> f64 {
        self.next() * (max - min) + min
    }

    /// Pick random element from slice
    pub fn pick<'a, T>(&mut self, arr: &'a [T]) -> &'a T {
        let idx = (self.next() * arr.len() as f64).floor() as usize;
        &arr[idx]
    }

    /// Pick and clone from slice
    pub fn pick_clone<T: Clone>(&mut self, arr: &[T]) -> T {
        let idx = (self.next() * arr.len() as f64).floor() as usize;
        arr[idx].clone()
    }

    /// Deterministically seed from an index
    pub fn from_index(base_seed: u32, index: u32) -> PRNG {
        PRNG::new(base_seed ^ index.wrapping_mul(0x9E3779B9))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn deterministic_sequence() {
        let mut a = PRNG::new(12345);
        let mut b = PRNG::new(12345);
        for _ in 0..100 {
            assert_eq!(a.next(), b.next());
        }
    }

    #[test]
    fn range_bounds() {
        let mut rng = PRNG::new(42);
        for _ in 0..1000 {
            let v = rng.next();
            assert!(v >= 0.0 && v < 1.0);
        }
    }

    #[test]
    fn int_bounds() {
        let mut rng = PRNG::new(42);
        for _ in 0..1000 {
            let v = rng.int(3, 7);
            assert!(v >= 3 && v <= 7);
        }
    }
}
