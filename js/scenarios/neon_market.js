// Neon Market Scenario
window.GameContent = window.GameContent || {};

window.GameContent['neon_market'] = {
    title: "EPISODE 4 // NEON MARKET",
    'start': {
        text: "The Neon Market is a chaos of neon signs, rain-slicked pavement, and the smell of cheap synthetic noodles. You're here to meet 'The Spider', a notorious data broker.",
        bg: 'linear-gradient(to bottom, #1a0a2e, #0a0a0a)',
        choices: [
            { text: "Look for a shadowy figure", nextScene: 'the_spider' },
            { text: "Buy some street food", nextScene: 'street_food' }
        ]
    },
    'street_food': {
        text: "The noodles are spicy and probably illegal in three sectors. Your vision blurs for a second, then sharpens. You feel... energized.",
        bg: 'linear-gradient(to bottom, #2a0a3e, #0a0a0a)',
        action: (engine) => engine.state.flags.energized = true,
        choices: [
            { text: "Now, find The Spider", nextScene: 'the_spider' }
        ]
    },
    'the_spider': {
        text: "A man in a trench coat with too many cybernetic eyes watches you from a corner stall. 'You have the credits, I have the ghosts,' he whispers.",
        bg: 'linear-gradient(to right, #000, #1a0a2e)',
        choices: [
            { text: "Offer 500 Credits", nextScene: 'offer_low' },
            {
                text: "Intimidate him",
                nextScene: 'intimidate',
                condition: (engine) => engine.state.flags.energized
            }
        ]
    },
    'offer_low': {
        text: "'Insulting,' The Spider spits. He signals his guards. You should probably leave before things get messy. \n\n[FAILED NEGOTIATION]",
        bg: '#311',
        choices: [
            { text: "Return to Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    },
    'intimidate': {
        text: "Your voice booms with synthetic authority. The Spider flinches. 'Alright, alright! Take the drive. Just don't tell the Syndicate.'",
        bg: 'linear-gradient(to right, #1a0a2e, #00ff55)',
        action: (engine) => engine.addToInventory('Syndicate Drive'),
        choices: [
            { text: "Leave the market", nextScene: 'end_market' }
        ]
    },
    'end_market': {
        text: "You disappear into the crowd, the drive heavy in your pocket. The mystery of Unit 7 is starting to unravel. \n\n[MISSION COMPLETE]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
