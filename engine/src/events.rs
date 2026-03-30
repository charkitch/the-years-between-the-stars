use crate::prng::PRNG;
use crate::types::*;

// ─── Helper to build events concisely ───────────────────────────────────────

fn effect(
    rep: i32, credits: i32, fuel: f64,
    price_mod: f64, faction_tag: Option<&str>,
) -> ChoiceEffect {
    ChoiceEffect {
        trading_reputation: rep,
        banned_goods: vec![],
        price_modifier: price_mod,
        faction_tag: faction_tag.map(|s| s.to_string()),
        credits_reward: credits,
        fuel_reward: fuel,
    }
}

fn choice(id: &str, label: &str, desc: &str, eff: ChoiceEffect, req_credits: Option<i32>) -> EventChoice {
    EventChoice {
        id: id.to_string(),
        label: label.to_string(),
        description: desc.to_string(),
        effect: eff,
        requires_min_tech: None,
        requires_credits: req_credits,
    }
}

fn event(
    id: &str, title: &str,
    lines: [&str; 3],
    choices: Vec<EventChoice>,
    politics: Option<Vec<PoliticalType>>,
    min_year: Option<u32>,
    faction_tag: Option<&str>,
) -> LandingEvent {
    LandingEvent {
        id: id.to_string(),
        title: title.to_string(),
        narrative_lines: [lines[0].to_string(), lines[1].to_string(), lines[2].to_string()],
        choices,
        applicable_politics: politics,
        min_galaxy_year: min_year,
        required_faction_tag: faction_tag.map(|s| s.to_string()),
    }
}

// ─── Landing Events (10) ────────────────────────────────────────────────────

pub fn landing_events() -> Vec<LandingEvent> {
    vec![
        event("REFUGEE_FLEET", "REFUGEE FLEET",
            [
                "A convoy of generation ships from a system you visited centuries ago drifts into the docking queue.",
                "The survivors carry cultural archives they believe you can authenticate — you were there, after all.",
                "A dignitary with hollow eyes approaches the ramp: \"You remember what it was like. Please — tell them what we had.\"",
            ],
            vec![
                choice("share_freely", "Share your testimony freely", "+Reputation, CR 200 humanitarian stipend", effect(2, 200, 0.0, 1.0, None), None),
                choice("sell_it", "Sell the testimony to media brokers", "-Reputation, CR 800", effect(-2, 800, 0.0, 1.0, None), None),
                choice("decline", "Plead ignorance and move on", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("ACQUISITION_PROPOSAL", "ACQUISITION PROPOSAL",
            [
                "A sleek representative from a megacorporation intercepts you at the airlock.",
                "They want to retain you as a historical courier — your longevity makes you an unrivalled chain of custody.",
                "\"We can make it worth your while,\" she says, sliding a contract across the scanner.",
            ],
            vec![
                choice("sign_contract", "Sign the courier contract", "+CR 1500, aligned with corporate interests", effect(0, 1500, 0.0, 1.0, Some("corp_ally")), None),
                choice("remain_independent", "Remain independent", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            Some(vec![PoliticalType::CorporateState, PoliticalType::Technocracy]),
            None, None,
        ),

        event("DOCKING_INSPECTION", "DOCKING INSPECTION",
            [
                "Priests in full ceremonial hazmat suits board before you can cycle the airlock.",
                "They cite the Purification Mandate — all vessels from \"heathen epochs\" must be spiritually cleansed.",
                "The levy is CR 400. You sense enforcement is entirely negotiable.",
            ],
            vec![
                choice("pay_levy", "Pay the CR 400 levy", "+Reputation with local clergy", effect(1, -400, 0.0, 1.0, None), Some(400)),
                choice("invoke_transit", "Invoke ancient transit rights", "-Reputation, local prices +25%", effect(-1, 0, 0.0, 1.25, None), None),
                choice("bribe_quietly", "Slide CR 200 into a collection plate", "+Reputation, cheaper than the levy", effect(1, -200, 0.0, 1.0, None), Some(200)),
            ],
            Some(vec![PoliticalType::Theocracy]),
            None, None,
        ),

        event("THE_ARCHIVIST", "THE ARCHIVIST",
            [
                "A white-haired historian intercepts you at the dock café, recorder already running.",
                "She has spent forty years reconstructing the era you lived through from fragments.",
                "\"You are the fragment,\" she says quietly. \"Would you sit with me for an hour?\"",
            ],
            vec![
                choice("full_interview", "Give a full interview, free of charge", "+Reputation ×2", effect(2, 0, 0.0, 1.0, None), None),
                choice("leave_nav_logs", "Leave a copy of your navigation logs", "+Reputation", effect(1, 0, 0.0, 1.0, None), None),
                choice("charge_time", "Charge your standard rate for your time", "-Reputation, CR 500", effect(-1, 500, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("DEAD_DROP_MESSAGE", "DEAD DROP MESSAGE",
            [
                "A maintenance bot delivers a data chip with no manifest number.",
                "It contains a resistance cell's plea: they need a courier who won't appear on modern databases.",
                "You are, in every formal sense, a ghost. They are counting on it.",
            ],
            vec![
                choice("help_rebels", "Accept the dead drop run", "+Reputation, local prices −15%", effect(1, 0, 0.0, 0.85, Some("rebel_ally")), None),
                choice("report_authorities", "Report the cell to station security", "CR 300 bounty, government aligned", effect(0, 300, 0.0, 1.0, Some("gov_ally")), None),
                choice("delete_message", "Wipe the chip and forget it", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            Some(vec![PoliticalType::MilitaryDictatorship, PoliticalType::StagnantMilitancy]),
            None, None,
        ),

        event("UNREGULATED_MARKET", "UNREGULATED MARKET",
            [
                "Someone has set up shop in the maintenance ring — no permits, no inspectors, no questions.",
                "They're selling everything in bulk, dirt-cheap, but want immediate payment for the whole lot.",
                "The goods are unmanifested. This is either a great deal or evidence in a future trial.",
            ],
            vec![
                choice("buy_the_lot", "Buy the entire lot (CR 600)", "Prices −30% this port", effect(0, -600, 0.0, 0.70, None), Some(600)),
                choice("browse_carefully", "Browse selectively", "Prices −15% this port", effect(0, 0, 0.0, 0.85, None), None),
                choice("skip_market", "Walk past without stopping", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            Some(vec![PoliticalType::Anarchist]),
            None, None,
        ),

        event("MUSEUM_OF_ANCIENTS", "MUSEUM OF THE ANCIENTS",
            [
                "The curator of the System Heritage Museum has been waiting at your berth since 0400.",
                "The museum's centrepiece exhibit covers your home era. They want to add a living artefact.",
                "\"We will display your ship's original components — with your permission, and proper compensation.\"",
            ],
            vec![
                choice("sell_components", "Sell old components to the museum", "CR 1000, +1 fuel unit (new parts fitted)", effect(0, 1000, 1.0, 1.0, None), None),
                choice("donate_components", "Donate the components", "+Reputation ×2, prices −20%", effect(2, 0, 0.0, 0.80, None), None),
                choice("decline_museum", "Decline politely", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            Some(vec![PoliticalType::Technocracy, PoliticalType::Democracy]),
            None, None,
        ),

        event("QUARANTINE_ADVISORY", "QUARANTINE ADVISORY",
            [
                "Station med-control broadcasts a tier-2 quarantine: a fast-mutating pathogen, origin unknown.",
                "Your ancient immune profile — pre-dating the standard inoculation series — could map the pathogen's lineage.",
                "The chief medical officer is requesting your bioscan data. Voluntarily. For now.",
            ],
            vec![
                choice("release_freely", "Release the bioscan data publicly", "+Reputation ×2, +2 fuel units (medical priority)", effect(2, 0, 2.0, 1.0, None), None),
                choice("sell_data", "Sell the data to a pharmaceutical corp", "-Reputation ×2, CR 1200", effect(-2, 1200, 0.0, 1.0, None), None),
                choice("deny_records", "Claim your records were lost in transit", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("SECTOR_TOLL", "SECTOR TOLL",
            [
                "A gunship flags you down inside the docking envelope. The insignia is unfamiliar — local warlord, recent vintage.",
                "\"Toll is five hundred credits. Historical vessels, double rate.\" The pilot seems to be reading from a card.",
                "You have been paying tolls since before this warlord's species existed.",
            ],
            vec![
                choice("pay_toll", "Pay the CR 500 toll", "Smooth passage", effect(0, -500, 0.0, 1.0, None), Some(500)),
                choice("negotiate", "Negotiate down to CR 200", "Half-price toll", effect(0, -200, 0.0, 1.0, None), Some(200)),
                choice("invoke_immunity", "Invoke historical transit immunity (Article 7)", "-Reputation, prices +40% (they remember)", effect(-1, 0, 0.0, 1.40, None), None),
            ],
            Some(vec![PoliticalType::Feudal, PoliticalType::MilitaryDictatorship, PoliticalType::StagnantMilitancy]),
            None, None,
        ),

        event("THE_LINEAGE", "THE LINEAGE",
            [
                "A dockworker stops you cold: she is holding a photograph — old, printed, degraded at the edges.",
                "The person in the photograph is you. The date stamp is 4,200 years ago. She found it in her grandmother's estate.",
                "\"Are you... related to them?\" she whispers. The dock is very quiet.",
            ],
            vec![
                choice("reveal_truth", "Tell her the truth", "+Reputation ×2 (she will tell everyone)", effect(2, 0, 0.0, 1.0, None), None),
                choice("claim_descent", "Claim to be a distant descendant", "+Reputation, CR 100 (she insists on buying you a drink)", effect(1, 100, 0.0, 1.0, None), None),
                choice("deny_lineage", "Deny any connection", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, Some(5000), None,
        ),
    ]
}

// ─── Asteroid Base Events (5) ───────────────────────────────────────────────

pub fn asteroid_base_events() -> Vec<LandingEvent> {
    vec![
        event("SMUGGLER_HAVEN", "SMUGGLER HAVEN",
            [
                "The hollowed-out asteroid hums with illicit commerce. Crates with scratched-off manifests line every corridor.",
                "A one-eyed dockmaster eyes your ancient ship with open admiration. \"Pre-war hull. Beautiful. Nobody scans for those.\"",
                "She leans in: \"I have a job, if you have nerve. No questions. Cash up front.\"",
            ],
            vec![
                choice("take_job", "Take the smuggling job", "CR 900, prices −20% here", effect(0, 900, 0.0, 0.80, None), None),
                choice("trade_info", "Trade information instead", "+Reputation, CR 300", effect(1, 300, 0.0, 1.0, None), None),
                choice("decline_smuggler", "Shake your head and walk away", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("THE_CHOP_SHOP", "THE CHOP SHOP",
            [
                "Deep in the rock, someone has built a shipyard out of salvaged parts and sheer audacity.",
                "The mechanic whistles when she sees your drive core. \"That's fifth-generation. I thought they were all scrapped.\"",
                "\"I can tune it — make her faster. Or I can buy it off you for more money than you've seen in a century.\"",
            ],
            vec![
                choice("tune_drive", "Let her tune the drive (CR 400)", "+2 fuel capacity worth of efficiency", effect(0, -400, 2.0, 1.0, None), Some(400)),
                choice("sell_spare", "Sell her your spare components", "CR 1200", effect(0, 1200, 0.0, 1.0, None), None),
                choice("leave_shop", "Leave the drive alone", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("GHOST_SIGNAL", "GHOST SIGNAL",
            [
                "The base is half-abandoned. Lights flicker in corridors that lead nowhere. Someone left in a hurry.",
                "Your comms pick up a looping distress call — old encoding, maybe decades stale. Maybe not.",
                "A data terminal near the airlock still works. The last log entry reads: \"They found us. Tell no one.\"",
            ],
            vec![
                choice("download_logs", "Download the station logs", "+Reputation (someone may pay for this)", effect(2, 0, 0.0, 1.0, None), None),
                choice("salvage_parts", "Salvage what you can carry", "CR 600", effect(0, 600, 0.0, 1.0, None), None),
                choice("leave_undisturbed", "Leave it undisturbed", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("THE_BROKER", "THE BROKER",
            [
                "A figure in a sealed environment suit meets you at the dock. No name. No station ID. Just business.",
                "\"I deal in futures,\" they say. \"Cargo that doesn't exist yet, from systems that haven't been surveyed.\"",
                "\"Your ship is old enough to carry pre-regulation manifests. That makes you... useful.\"",
            ],
            vec![
                choice("invest", "Invest CR 500 in speculative cargo futures", "CR 500 cost, prices −30% at this base", effect(0, -500, 0.0, 0.70, None), Some(500)),
                choice("sell_route_data", "Sell your jump route data", "CR 700, -Reputation (someone will be watching)", effect(-1, 700, 0.0, 1.0, None), None),
                choice("walk_away_broker", "Walk away from the deal", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("MINERS_DISPUTE", "MINERS' DISPUTE",
            [
                "Two mining crews have the base in a standoff. Both claim the same vein of rare earth minerals.",
                "Neither side trusts station authority — what authority there is. But you, the ancient outsider, might arbitrate.",
                "\"You've been around longer than any of us,\" growls the crew chief. \"What do you say is fair?\"",
            ],
            vec![
                choice("split_evenly", "Rule for an even split", "+Reputation ×2, both crews grateful", effect(2, 0, 0.0, 1.0, None), None),
                choice("side_with_stronger", "Side with the larger crew (for a cut)", "CR 800, -Reputation", effect(-1, 800, 0.0, 1.0, None), None),
                choice("refuse_dispute", "Refuse to get involved", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),
    ]
}

// ─── Oort Cloud Base Events (3) ─────────────────────────────────────────────

pub fn oort_cloud_base_events() -> Vec<LandingEvent> {
    vec![
        event("THE_LISTENER", "THE LISTENER",
            [
                "The station is a single habitat module bolted to a frozen comet. One occupant. She has been here for thirty years.",
                "She monitors deep-space transmissions from beyond the Oort cloud. Most of it is noise. Some of it is not.",
                "\"I heard something last week,\" she whispers. \"Something that heard me back.\"",
            ],
            vec![
                choice("listen_recording", "Listen to the recording", "+Reputation ×2 (you are now a witness)", effect(2, 0, 0.0, 1.0, None), None),
                choice("buy_data", "Buy a copy of all her data (CR 300)", "CR 300 cost, +1 fuel (she refuels you as thanks)", effect(0, -300, 1.0, 1.0, None), Some(300)),
                choice("leave_listener", "Leave her to her vigil", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("ICE_MONKS", "ICE MONKS",
            [
                "A small religious order has built a monastery in the ice. They believe the cold preserves truth.",
                "They know who you are — the one who outlives eras. To them, you are a kind of proof.",
                "\"Stay with us,\" says the abbot. \"Even a day in the deep cold would teach you what stillness means.\"",
            ],
            vec![
                choice("stay_and_meditate", "Stay for a day of contemplation", "+Reputation ×2, +2 fuel (they insist)", effect(2, 0, 2.0, 1.0, None), None),
                choice("donate_supplies", "Donate supplies (CR 200)", "+Reputation, their blessing", effect(1, -200, 0.0, 1.0, None), Some(200)),
                choice("decline_monks", "Decline gracefully", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("FROZEN_DERELICT", "FROZEN DERELICT",
            [
                "The station is grafted onto the hull of a ship older than yours. Much older. The markings are unrecognizable.",
                "Someone has been studying it for decades. The interior is a museum of impossible engineering.",
                "\"We think it came from outside,\" says the researcher. \"Outside the galaxy. We need help translating the drive logs.\"",
            ],
            vec![
                choice("help_translate", "Help translate the drive logs", "+Reputation ×2, CR 500", effect(2, 500, 0.0, 1.0, None), None),
                choice("salvage_tech", "Quietly pocket a component", "CR 1500, -Reputation ×2", effect(-2, 1500, 0.0, 1.0, None), None),
                choice("leave_derelict", "Leave it to the researchers", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),
    ]
}

// ─── Maximum Space Events (3) ───────────────────────────────────────────────

pub fn maximum_space_events() -> Vec<LandingEvent> {
    vec![
        event("THE_VOID_STATION", "THE VOID",
            [
                "There is nothing here. That is the point.",
                "The station exists at the mathematical edge of the system's gravitational influence. Beyond this, you drift between stars forever.",
                "A single attendant maintains the beacon. She looks at you as though she has been waiting.",
            ],
            vec![
                choice("stay_awhile", "Stay and watch the void", "+Reputation ×2 (you understand something now)", effect(2, 0, 0.0, 1.0, None), None),
                choice("sign_the_log", "Sign the visitor log", "+Reputation (you are only the 12th entry)", effect(1, 0, 0.0, 1.0, None), None),
                choice("leave_void", "Turn back toward the light", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        event("EDGE_SIGNAL", "EDGE SIGNAL",
            [
                "The station is broadcasting on a frequency that hasn't been used in three thousand years. Your frequency.",
                "Inside, the walls are covered in star charts — but the constellations are wrong. Shifted. As seen from somewhere else.",
                "A message is etched into the airlock: \"FOR THE ONE WHO TRAVELS BETWEEN.\" It is addressed to you.",
            ],
            vec![
                choice("take_the_charts", "Take the star charts", "CR 2000 (priceless to the right buyer)", effect(0, 2000, 0.0, 1.0, None), None),
                choice("leave_a_reply", "Leave a reply message", "+Reputation ×2, +3 fuel (the station refuels you)", effect(2, 0, 3.0, 1.0, None), None),
                choice("seal_it_shut", "Seal the station and leave", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),

        // Third maximum space event — new addition to match the TS "3 events" count
        // (TS only has 2 in MAXIMUM_SPACE_EVENTS but the plan says 3; adding one more)
        event("THE_LAST_BROADCAST", "THE LAST BROADCAST",
            [
                "The station's antenna array is aimed at nothing — at the gap between galaxies where no stars shine.",
                "A recording loops endlessly: a voice reading coordinates in a language that predates your civilization by millennia.",
                "The attendant is long dead. The station runs on automatic. It has been broadcasting for longer than human history.",
            ],
            vec![
                choice("record_coordinates", "Record the coordinates", "+Reputation ×2 (this changes everything)", effect(2, 0, 0.0, 1.0, None), None),
                choice("shut_it_down", "Shut down the broadcast", "CR 800 (salvage the power cells)", effect(0, 800, 0.0, 1.0, None), None),
                choice("leave_broadcasting", "Leave it broadcasting", "No effect", effect(0, 0, 0.0, 1.0, None), None),
            ],
            None, None, None,
        ),
    ]
}

// ─── Event Selection ────────────────────────────────────────────────────────

pub fn select_event(
    civ_state: &CivilizationState,
    system_choices: Option<&SystemChoices>,
    seed: u32,
) -> Option<LandingEvent> {
    let completed_ids: Vec<&str> = system_choices
        .map(|c| c.completed_event_ids.iter().map(|s| s.as_str()).collect())
        .unwrap_or_default();
    let faction_tag: Option<&str> = system_choices.and_then(|c| c.faction_tag.as_deref());

    let events = landing_events();
    let candidates: Vec<LandingEvent> = events.into_iter().filter(|ev| {
        if completed_ids.contains(&ev.id.as_str()) { return false; }
        if let Some(ref politics) = ev.applicable_politics {
            if !politics.contains(&civ_state.politics) { return false; }
        }
        if let Some(min_year) = ev.min_galaxy_year {
            if civ_state.galaxy_year < min_year { return false; }
        }
        if let Some(ref req_tag) = ev.required_faction_tag {
            if faction_tag != Some(req_tag.as_str()) { return false; }
        }
        true
    }).collect();

    if candidates.is_empty() { return None; }

    let mut rng = PRNG::new(seed);
    let idx = (rng.next() * candidates.len() as f64).floor() as usize;
    Some(candidates[idx].clone())
}

pub fn select_secret_base_event(
    base_type: SecretBaseType,
    system_choices: Option<&SystemChoices>,
    seed: u32,
) -> Option<LandingEvent> {
    let completed_ids: Vec<&str> = system_choices
        .map(|c| c.completed_event_ids.iter().map(|s| s.as_str()).collect())
        .unwrap_or_default();

    let pool = match base_type {
        SecretBaseType::Asteroid => asteroid_base_events(),
        SecretBaseType::OortCloud => oort_cloud_base_events(),
        SecretBaseType::MaximumSpace => maximum_space_events(),
    };

    let candidates: Vec<LandingEvent> = pool.into_iter()
        .filter(|ev| !completed_ids.contains(&ev.id.as_str()))
        .collect();

    if candidates.is_empty() { return None; }

    let mut rng = PRNG::new(seed);
    let idx = (rng.next() * candidates.len() as f64).floor() as usize;
    Some(candidates[idx].clone())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn event_counts() {
        assert_eq!(landing_events().len(), 10);
        assert_eq!(asteroid_base_events().len(), 5);
        assert_eq!(oort_cloud_base_events().len(), 3);
        assert_eq!(maximum_space_events().len(), 3);
    }

    #[test]
    fn select_returns_event() {
        let civ = CivilizationState {
            system_id: 0, galaxy_year: 3200, era: 12,
            politics: PoliticalType::Democracy,
            economy: EconomyType::Agricultural,
            banned_goods: vec![], price_modifier: 1.0,
            luxury_mod: 1.0, anarchy_variance: false, tech_bonus: vec![],
        };
        let ev = select_event(&civ, None, 42);
        assert!(ev.is_some());
    }

    #[test]
    fn filters_by_politics() {
        let civ = CivilizationState {
            system_id: 0, galaxy_year: 3200, era: 12,
            politics: PoliticalType::Theocracy,
            economy: EconomyType::Agricultural,
            banned_goods: vec![], price_modifier: 1.0,
            luxury_mod: 1.0, anarchy_variance: false, tech_bonus: vec![],
        };
        // Run 100 times — should never pick events restricted to other politics
        for seed in 0..100 {
            if let Some(ev) = select_event(&civ, None, seed) {
                if let Some(ref pols) = ev.applicable_politics {
                    assert!(pols.contains(&PoliticalType::Theocracy),
                        "Event {} not applicable to Theocracy", ev.id);
                }
            }
        }
    }
}
