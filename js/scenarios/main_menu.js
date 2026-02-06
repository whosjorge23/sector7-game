// Main Menu Scenario
window.GameContent = window.GameContent || {};

window.GameContent['main_menu'] = {
    title: "SECTOR 7 // TERMINAL",
    'start': {
        text: "SYSTEM READY.\n\nSELECT SIMULATION SEQUENCE:",
        bg: 'linear-gradient(180deg, #0a0a0a, #001100)',
        choices: [
            {
                text: "Episode 1: The Vanishing of Unit 7",
                nextScene: 'load_unit_7',
                action: (engine) => engine.loadScenario('unit_7')
            },
            {
                text: "Episode 2: Sector 9 (DEMO)",
                nextScene: 'load_sector_9',
                action: (engine) => engine.loadScenario('sector_9')
            },
            {
                text: "Episode 3: Lab Zero",
                nextScene: 'load_lab_zero',
                action: (engine) => engine.loadScenario('lab_zero')
            },
            {
                text: "Episode 4: The Neon Market",
                nextScene: 'load_neon_market',
                action: (engine) => engine.loadScenario('neon_market')
            },
            {
                text: "Episode 5: Orbital Station Alpha",
                nextScene: 'load_orbital_station',
                action: (engine) => engine.loadScenario('orbital_station')
            },
            {
                text: "Episode 6: Ghost Signal",
                nextScene: 'load_ghost_signal',
                action: (engine) => engine.loadScenario('ghost_signal')
            },
            {
                text: "Episode 7: Neo-Tokyo Subway",
                nextScene: 'load_neo_tokyo',
                action: (engine) => engine.loadScenario('neo_tokyo')
            },
            {
                text: "Episode 8: Data Vault Prime",
                nextScene: 'load_data_vault',
                action: (engine) => engine.loadScenario('data_vault')
            },
            {
                text: "Episode 9: Synthetic Forest",
                nextScene: 'load_synthetic_forest',
                action: (engine) => engine.loadScenario('synthetic_forest')
            },
            {
                text: "Episode 10: Zero Point",
                nextScene: 'load_zero_point',
                action: (engine) => engine.loadScenario('zero_point')
            }
        ]
    }
};
