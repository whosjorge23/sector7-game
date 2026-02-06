// Sector 9 Scenario
window.GameContent = window.GameContent || {};

window.GameContent['sector_9'] = {
    title: "EPISODE 2 // SECTOR 9",
    'start': {
        text: "SECTOR 9. The Industrial District. \n\nYou wake up in a dumpster. Rain pours down on your face. You have no memory of how you got here.",
        bg: 'linear-gradient(180deg, #1a1a2e, #000)',
        choices: [
            { text: "Climb out", nextScene: 'alleyway' },
            { text: "Stay hidden", nextScene: 'garbage_truck' }
        ]
    },
    'alleyway': {
        text: "You stumble into a neon-lit alleyway. Two paths lie ahead: \n\n1. Towards the neon sign bar 'The Glitch'.\n2. Into the dark sewers.",
        bg: 'linear-gradient(180deg, #1a1a2e, #0e0e1a)',
        choices: [
            { text: "Go to The Glitch", nextScene: 'the_glitch' },
            { text: "Enter Sewers", nextScene: 'sewers' }
        ]
    },
    'the_glitch': {
        text: "The bouncer stops you. 'No chip, no entry.', he grumbles. You check your wrist - your ID chip is gone.",
        bg: 'linear-gradient(90deg, #500050, #000)',
        choices: [
            { text: "Return to Alley", nextScene: 'alleyway' }
        ]
    },
    'sewers': {
        text: "The smell is unbearable. But you see a faint light ahead. It's a maintenance terminal.",
        bg: 'linear-gradient(180deg, #0f0, #000)',
        choices: [
            { text: "Inspect Terminal", nextScene: 'end_demo' }
        ]
    },
    'garbage_truck': {
        text: "A robotic arm scoops up the contents of the dumpster. You are compacted into a nutrient cube. \n\n[BAD END]",
        bg: '#300',
        choices: [
            { text: "Retry", nextScene: 'start', action: (engine) => engine.loadScenario('sector_9') },
            { text: "Return to Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    },
    'end_demo': {
        text: "This is the end of the Sector 9 Demo. Purchase the DLC for more content.",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
