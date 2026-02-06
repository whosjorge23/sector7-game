// Neo-Tokyo Subway Scenario
window.GameContent = window.GameContent || {};

window.GameContent['neo_tokyo'] = {
    title: "EPISODE 7 // NEO-TOKYO SUBWAY",
    'start': {
        text: "The maglev train screams through the tunnel at 500km/h. You're in Car 4. The doors to Car 5 are locked, and you can hear the sounds of heavy combat boots approaching from Car 3.",
        bg: 'linear-gradient(90deg, #001, #005, #000)',
        choices: [
            { text: "Climb to the roof", nextScene: 'train_roof' },
            { text: "Hack the door to Car 5", nextScene: 'hack_car5' }
        ]
    },
    'train_roof': {
        text: "The wind is deafening. Neon signs whip past like laser fire. Ahead, a low tunnel entrance looms. You have seconds to move.",
        bg: 'linear-gradient(0deg, #00f, #000)',
        choices: [
            { text: "Drop back inside", nextScene: 'car5_entry' }
        ]
    },
    'hack_car5': {
        text: "Your deck glows blue. The lock cycles through millions of combinations. 'ACCESS GRANTED.'",
        bg: 'linear-gradient(135deg, #05f, #000)',
        action: (engine) => engine.addToInventory('Bypassed Chip'),
        choices: [
            { text: "Enter Car 5", nextScene: 'car5_entry' }
        ]
    },
    'car5_entry': {
        text: "Car 5 is empty, except for a single glowing briefcase. The train begins to slow down suddenly. The station is ahead.",
        bg: 'linear-gradient(90deg, #000, #020)',
        choices: [
            { text: "Grab the case and jump", nextScene: 'end_subway' }
        ]
    },
    'end_subway': {
        text: "You roll onto the platform as the train doors hiss open. The pursuit continues. \n\n[MISSION COMPLETE]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
