use crate::prng::PRNG;
use crate::types::*;

const REPUTATION_SELL_BONUS: f64 = 0.02;

fn base_price(good: GoodName) -> i32 {
    match good {
        GoodName::Food => 40,
        GoodName::Textiles => 65,
        GoodName::Radioactives => 162,
        GoodName::Liquor => 220,
        GoodName::Luxuries => 440,
        GoodName::Narcotics => 490,
        GoodName::Computers => 853,
    }
}

fn economy_modifier(economy: EconomyType, good: GoodName) -> i32 {
    match (economy, good) {
        (EconomyType::Agricultural, GoodName::Food) => -20,
        (EconomyType::Agricultural, GoodName::Textiles) => -15,
        (EconomyType::Agricultural, GoodName::Narcotics) => 60,
        (EconomyType::Industrial, GoodName::Computers) => -100,
        (EconomyType::Industrial, GoodName::Textiles) => -20,
        (EconomyType::Industrial, GoodName::Food) => 30,
        (EconomyType::HighTech, GoodName::Computers) => -200,
        (EconomyType::HighTech, GoodName::Radioactives) => -40,
        (EconomyType::HighTech, GoodName::Luxuries) => -50,
        (EconomyType::RichIndustrial, GoodName::Computers) => -150,
        (EconomyType::RichIndustrial, GoodName::Textiles) => -30,
        (EconomyType::RichIndustrial, GoodName::Liquor) => -30,
        (EconomyType::PoorAgricultural, GoodName::Food) => -30,
        (EconomyType::PoorAgricultural, GoodName::Luxuries) => 100,
        (EconomyType::Refinery, GoodName::Radioactives) => -60,
        (EconomyType::Refinery, GoodName::Liquor) => -40,
        (EconomyType::Refinery, GoodName::Food) => 20,
        _ => 0,
    }
}

pub fn get_market(
    system_id: u32,
    economy: EconomyType,
    civ_state: Option<&CivilizationState>,
    system_choices: Option<&SystemChoices>,
) -> Vec<MarketEntry> {
    let era = civ_state.map_or(0, |c| c.era);
    let mut rng = PRNG::from_index(CLUSTER_SEED, system_id.wrapping_mul(53).wrapping_add(7).wrapping_add(era.wrapping_mul(1000)));

    let civ_banned: Vec<GoodName> = civ_state.map_or(vec![], |c| c.banned_goods.clone());
    let choice_banned: Vec<GoodName> = system_choices.map_or(vec![], |c| c.banned_goods.clone());

    let politics_mod = civ_state.map_or(1.0, |c| c.price_modifier);
    let luxury_mod = civ_state.map_or(1.0, |c| c.luxury_mod);
    let tech_bonus: Vec<GoodName> = civ_state.map_or(vec![], |c| c.tech_bonus.clone());
    let anarchy_variance = civ_state.map_or(false, |c| c.anarchy_variance);
    let choice_mod = system_choices.map_or(1.0, |c| c.price_modifier);
    let rep_bonus = system_choices.map_or(1.0, |c| {
        1.0 + c.trading_reputation as f64 * REPUTATION_SELL_BONUS
    });

    GoodName::ALL.iter().map(|&good| {
        let base = base_price(good);
        let econ_mod = economy_modifier(economy, good);

        let variance = if anarchy_variance {
            rng.float(-0.50, 0.50)
        } else {
            rng.float(-0.15, 0.15)
        };

        let mut price = ((base + econ_mod) as f64 * (1.0 + variance)).round() as i32;

        // Politics multiplier
        price = (price as f64 * politics_mod).round() as i32;
        // Luxury extra
        if good == GoodName::Luxuries {
            price = (price as f64 * luxury_mod).round() as i32;
        }
        // Tech bonus
        if tech_bonus.contains(&good) {
            price = (price as f64 * 0.90).round() as i32;
        }
        // Player-choice multiplier
        price = (price as f64 * choice_mod).round() as i32;

        let buy_price = price.max(1);
        let sell_price = (price as f64 * 0.85 * rep_bonus).round().max(1.0) as i32;
        let stock = rng.int(0, 30);
        let banned = civ_banned.contains(&good) || choice_banned.contains(&good);

        MarketEntry { good, buy_price, sell_price, stock, banned }
    }).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn market_has_all_goods() {
        let market = get_market(0, EconomyType::Agricultural, None, None);
        assert_eq!(market.len(), 7);
    }

    #[test]
    fn prices_positive() {
        let market = get_market(5, EconomyType::HighTech, None, None);
        for entry in &market {
            assert!(entry.buy_price >= 1);
            assert!(entry.sell_price >= 1);
        }
    }

    #[test]
    fn sell_less_than_buy() {
        let market = get_market(10, EconomyType::Industrial, None, None);
        for entry in &market {
            assert!(entry.sell_price <= entry.buy_price);
        }
    }
}
