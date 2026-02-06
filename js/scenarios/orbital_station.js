// Orbital Station Scenario
window.GameContent = window.GameContent || {};

window.GameContent['orbital_station'] = {
    title: "EPISODE 5 // ORBITAL STATION",
    'start': {
        text: "Orbital Station Alpha hangs in silence. The gravity is at 0.5g. Beyond the viewport, the Earth is a dark marble. The oxygen alarm is chirping—low and persistent.",
        bg: 'linear-gradient(180deg, #111, #000022)',
        choices: [
            { text: "Go to Life Support", nextScene: 'life_support' },
            { text: "Search the Crew Quarters", nextScene: 'crew_quarters' }
        ]
    },
    'life_support': {
        text: "The main generator is dead. It's not a malfunction; someone cut the lines. You see a figure through the frosted glass of the engine room.",
        bg: 'linear-gradient(180deg, #1a1a1a, #000)',
        choices: [
            { text: "Fix the lines", nextScene: 'fix_lines' },
            { text: "Approach the figure", nextScene: 'the_figure' }
        ]
    },
    'crew_quarters': {
        text: "Personal items float in the low gravity. You find an emergency oxygen mask and a diary. The last entry: 'It followed us from the Moon.'",
        bg: 'linear-gradient(0deg, #001, #000)',
        action: (engine) => engine.addToInventory('Oxygen Mask'),
        choices: [
            { text: "Go to Life Support", nextScene: 'life_support' }
        ]
    },
    'fix_lines': {
        text: "You work feverishly as your breath fogs your visor. The power hums back to life. But the doors behind you have just hissed shut. \n\n[RESTORED... FOR NOW]",
        bg: 'linear-gradient(180deg, #00ff55, #000)',
        choices: [
            { text: "End Demo", nextScene: 'end_orbital' }
        ]
    },
    'the_figure': {
        text: "You tap on the glass. The figure turns. It doesn't have a face—just a flickering monitor where a head should be. It screams in a language made of dial-up tones. \n\n[CONTACT LOST]",
        bg: '#300',
        choices: [
            { text: "Return to Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    },
    'end_orbital': {
        text: "The station is powered, but you're not alone. The journey is just beginning. \n\n[TO BE CONTINUED]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
