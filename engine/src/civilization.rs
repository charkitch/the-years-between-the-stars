use crate::prng::PRNG;
use crate::trading::{is_luxury_good, legality_for_good, strategic_goods};
use crate::types::*;

// ─── Political clusters (70% chance to stay within cluster across eras) ─────

const POLITICAL_CLUSTERS: &[&[PoliticalType]] = &[
    &[PoliticalType::Democracy, PoliticalType::LibertineDemocracy],
    &[PoliticalType::CorporateState, PoliticalType::Technocracy],
    &[PoliticalType::MilitaryDictatorship, PoliticalType::StagnantMilitancy],
    &[PoliticalType::Theocracy, PoliticalType::Feudal],
    &[PoliticalType::Anarchist],
];

pub fn political_clusters() -> &'static [&'static [PoliticalType]] {
    POLITICAL_CLUSTERS
}

fn cluster_of(p: PoliticalType) -> &'static [PoliticalType] {
    for cluster in POLITICAL_CLUSTERS {
        if cluster.contains(&p) {
            return cluster;
        }
    }
    PoliticalType::ALL
}

// ─── Banned goods per politics ──────────────────────────────────────────────

fn banned_goods(politics: PoliticalType) -> Vec<GoodName> {
    GoodName::ALL
        .iter()
        .copied()
        .filter(|good| legality_for_good(politics, *good) == MarketLegality::Prohibited)
        .collect()
}

fn price_modifier(politics: PoliticalType) -> f64 {
    match politics {
        PoliticalType::Theocracy => 1.15,
        PoliticalType::MilitaryDictatorship => 1.20,
        PoliticalType::CorporateState => 0.95,
        PoliticalType::LibertineDemocracy => 0.95,
        _ => 1.0,
    }
}

// ─── Economy whitelists per politics ────────────────────────────────────────

fn allowed_economies(politics: PoliticalType) -> &'static [EconomyType] {
    match politics {
        PoliticalType::Democracy => &[EconomyType::Agricultural, EconomyType::Industrial, EconomyType::RichIndustrial, EconomyType::HighTech],
        PoliticalType::LibertineDemocracy => &[EconomyType::Agricultural, EconomyType::Industrial, EconomyType::RichIndustrial, EconomyType::HighTech],
        PoliticalType::CorporateState => &[EconomyType::Industrial, EconomyType::RichIndustrial, EconomyType::HighTech],
        PoliticalType::MilitaryDictatorship => &[EconomyType::Industrial, EconomyType::PoorAgricultural, EconomyType::Refinery],
        PoliticalType::StagnantMilitancy => &[EconomyType::PoorAgricultural, EconomyType::Industrial, EconomyType::Refinery],
        PoliticalType::Theocracy => &[EconomyType::Agricultural, EconomyType::PoorAgricultural, EconomyType::Industrial],
        PoliticalType::Anarchist => &[EconomyType::PoorAgricultural, EconomyType::Agricultural, EconomyType::Refinery, EconomyType::Industrial],
        PoliticalType::Technocracy => &[EconomyType::HighTech, EconomyType::Industrial, EconomyType::RichIndustrial, EconomyType::Refinery],
        PoliticalType::Feudal => &[EconomyType::PoorAgricultural, EconomyType::Agricultural],
    }
}

// ─── Political derivation ───────────────────────────────────────────────────

fn derive_politics_raw(system_id: u32, era: u32) -> PoliticalType {
    let seed = CLUSTER_SEED ^ system_id.wrapping_mul(0x9E3779B9) ^ era.wrapping_mul(0x517CC1B7);
    let mut rng = PRNG::from_index(seed, era);
    rng.pick_clone(PoliticalType::ALL)
}

fn derive_politics(system_id: u32, era: u32, prev_era: Option<u32>) -> PoliticalType {
    let seed = CLUSTER_SEED ^ system_id.wrapping_mul(0x9E3779B9) ^ era.wrapping_mul(0x517CC1B7);
    let mut rng = PRNG::from_index(seed, era);

    if let Some(prev) = prev_era {
        let prev_politics = derive_politics_raw(system_id, prev);
        let cluster = cluster_of(prev_politics);
        let stay = rng.next() < 0.70;
        if stay {
            let seed2 = CLUSTER_SEED ^ system_id.wrapping_mul(0x9E3779B9) ^ era.wrapping_mul(0x517CC1B7).wrapping_add(1);
            let mut cluster_rng = PRNG::from_index(seed2, era);
            return cluster_rng.pick_clone(cluster);
        }
    }

    let seed3 = CLUSTER_SEED ^ system_id.wrapping_mul(0x9E3779B9) ^ era.wrapping_mul(0x517CC1B7).wrapping_add(2);
    PRNG::from_index(seed3, era).pick_clone(PoliticalType::ALL)
}

pub fn derive_economy(base_economy: EconomyType, politics: PoliticalType, rng: &mut PRNG) -> EconomyType {
    let allowed = allowed_economies(politics);
    if allowed.contains(&base_economy) {
        return base_economy;
    }
    rng.pick_clone(allowed)
}

// ─── Public API ─────────────────────────────────────────────────────────────

pub fn get_civ_state(system_id: u32, galaxy_year: u32, base_economy: EconomyType) -> CivilizationState {
    let era = galaxy_year / ERA_LENGTH;
    let prev_era = if era > 0 { Some(era - 1) } else { None };

    let politics = derive_politics(system_id, era, prev_era);

    let econ_seed = CLUSTER_SEED ^ system_id.wrapping_mul(0x9E3779B9) ^ era.wrapping_mul(0x517CC1B7).wrapping_add(3);
    let mut econ_rng = PRNG::from_index(econ_seed, era);
    let economy = derive_economy(base_economy, politics, &mut econ_rng);

    let banned = banned_goods(politics);
    let price_mod = price_modifier(politics);
    let luxury_mod = if politics == PoliticalType::StagnantMilitancy
        && GoodName::ALL.iter().any(|good| is_luxury_good(*good))
    {
        1.30
    } else {
        1.0
    };
    let anarchy_variance = politics == PoliticalType::Anarchist;
    let tech_bonus = if politics == PoliticalType::Technocracy {
        strategic_goods()
    } else {
        vec![]
    };

    CivilizationState {
        system_id,
        galaxy_year,
        era,
        politics,
        economy,
        banned_goods: banned,
        price_modifier: price_mod,
        luxury_mod,
        anarchy_variance,
        tech_bonus,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn deterministic_politics() {
        let a = get_civ_state(5, 3500, EconomyType::Industrial);
        let b = get_civ_state(5, 3500, EconomyType::Industrial);
        assert_eq!(a.politics, b.politics);
        assert_eq!(a.economy, b.economy);
    }

    #[test]
    fn era_changes() {
        let era0 = get_civ_state(0, 3200, EconomyType::Agricultural);
        let era1 = get_civ_state(0, 3500, EconomyType::Agricultural);
        // Different eras — politics may differ (or may not due to cluster continuity)
        assert_eq!(era0.era, 12); // 3200/250
        assert_eq!(era1.era, 14); // 3500/250
    }

    #[test]
    fn banned_goods_populated() {
        // Theocracy should ban at least one vice/juridical good.
        let state = CivilizationState {
            system_id: 0, galaxy_year: 3200, era: 12,
            politics: PoliticalType::Theocracy,
            economy: EconomyType::Agricultural,
            banned_goods: banned_goods(PoliticalType::Theocracy),
            price_modifier: 1.15, luxury_mod: 1.0,
            anarchy_variance: false, tech_bonus: vec![],
        };
        assert!(state.banned_goods.contains(&GoodName::DreamResin));
        assert!(state.banned_goods.contains(&GoodName::JurisdictionSeals));
    }
}
