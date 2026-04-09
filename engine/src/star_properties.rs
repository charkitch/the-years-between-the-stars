use crate::prng::PRNG;
use crate::types::*;
use std::f64::consts::PI;

pub const ROCKY_COLORS: &[u32] = &[0x8B6914, 0xA0522D, 0x7a6248, 0xB87333, 0x996633, 0xCC9966];
pub const GAS_COLORS: &[u32] = &[0x6688AA, 0x7A9B8C, 0x9B7A6A, 0x5577AA, 0x886699, 0x4466AA];
pub const MOON_COLORS: &[u32] = &[0x777788, 0x888877, 0xAA9988, 0x667788];

pub fn star_color(st: StarType) -> u32 {
    match st {
        StarType::G   => 0xFFEE88,
        StarType::K   => 0xFFAA44,
        StarType::M   => 0xFF6633,
        StarType::F   => 0xFFFFFF,
        StarType::A   => 0xAABBFF,
        StarType::WD  => 0xF0F0FF,

        StarType::NS  => 0xCCDDFF,
        StarType::PU  => 0x44AAFF,
        StarType::XB  => 0xFF6688,
        StarType::MG  => 0xDD44FF,
        StarType::BH  => 0x220022,
        StarType::XBB => 0xFF4466,
        StarType::MQ  => 0x67D8FF,
        StarType::SGR => 0xFFAA22,
        StarType::Iron => 0x2A2A2A,
    }
}

pub fn star_radius_range(st: StarType) -> (f64, f64) {
    match st {
        StarType::WD   => (30.0, 50.0),
        StarType::Iron => (5.0, 10.0),

        StarType::NS  => (60.0, 100.0),
        StarType::PU  => (60.0, 100.0),
        StarType::XB  => (36.0, 64.0),
        StarType::MG  => (8.0, 12.0),
        StarType::BH  => (90.0, 140.0),
        StarType::XBB => (28.0, 48.0),
        StarType::MQ  => (80.0, 120.0),
        StarType::SGR => (8.0, 12.0),
        _ => (400.0, 600.0),
    }
}

pub fn generate_binary_companion(star_type: StarType, rng: &mut PRNG) -> Option<BinaryCompanionData> {
    if !matches!(star_type, StarType::XB | StarType::XBB | StarType::MQ) {
        return None;
    }
    let companion_type = match star_type {
        StarType::XBB => {
            let roll = rng.next();
            if roll < 0.55 {
                StarType::K
            } else if roll < 0.90 {
                StarType::M
            } else {
                StarType::G
            }
        }
        StarType::MQ => {
            let roll = rng.next();
            if roll < 0.42 {
                StarType::A
            } else if roll < 0.77 {
                StarType::F
            } else {
                StarType::G
            }
        }
        _ => {
            let companion_types = [StarType::G, StarType::K, StarType::F, StarType::A];
            *rng.pick(&companion_types)
        }
    };
    Some(BinaryCompanionData {
        star_type: companion_type,
        radius: if matches!(star_type, StarType::MQ) {
            rng.float(420.0, 620.0)
        } else {
            rng.float(350.0, 550.0)
        },
        color: star_color(companion_type),
        orbit_radius: if matches!(star_type, StarType::MQ) {
            rng.float(900.0, 1250.0)
        } else {
            rng.float(850.0, 1150.0)
        },
        orbit_speed: if matches!(star_type, StarType::MQ) {
            rng.float(0.00014, 0.00028)
        } else {
            rng.float(0.00016, 0.00034)
        },
        orbit_phase: rng.float(0.0, PI * 2.0),
    })
}
