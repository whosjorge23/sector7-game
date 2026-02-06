// Unit 7 Scenario
window.GameContent = window.GameContent || {};

window.GameContent['unit_7'] = {
    title: "EPISODE 1 // UNIT 7",
    'start': {
        text: "The terminal flickers life. You are standing in the corridor of Unit 7. The air smells of ozone and stale rain. The door to Apartment 704 is ajar.",
        bg: 'linear-gradient(45deg, #111, #212121)',
        choices: [
            { text: "Enter Apartment 704", nextScene: 'apartment_entry' },
            { text: "Check your pockets", nextScene: 'check_pockets' }
        ]
    },
    'check_pockets': {
        text: "You find a crumpled note and a lighter. The note reads: 'DON'T TRUST THE NETWORK'.",
        bg: 'linear-gradient(45deg, #111, #212121)',
        action: (engine) => engine.addToInventory('Lighter'),
        choices: [
            { text: "Put them back and enter the apartment", nextScene: 'apartment_entry' }
        ]
    },
    'apartment_entry': {
        text: "Inside, the apartment is in chaos. Papers scattered everywhere. A personal computer controls the far wall, screen glowing with a red warning.",
        bg: 'linear-gradient(135deg, #1a0505, #000)',
        choices: [
            { text: "Inspect the computer", nextScene: 'computer_inspect' },
            { text: "Search the desk", nextScene: 'desk_search' }
        ]
    },
    'computer_inspect': {
        text: "The screen displays: 'PURGE IMMINENT'. Access requires a keycard.",
        bg: 'linear-gradient(135deg, #1a0505, #000)',
        choices: [
            { text: "Back away", nextScene: 'apartment_entry' },
            { text: "Try to bypass (Requires Hack Skill)", nextScene: 'hack_fail', condition: () => false }
        ]
    },
    'desk_search': {
        text: "You push aside mounds of schematics. Underneath lies a bloody keycard labeled 'ACCESS LEVEL 4'.",
        bg: 'linear-gradient(135deg, #1a0505, #000)',
        choices: [
            { text: "Take Keycard", nextScene: 'take_keycard' }
        ]
    },
    'take_keycard': {
        text: "You picked up the Keycard.",
        action: (engine) => engine.addToInventory('Keycard Lv4'),
        choices: [
            { text: "Go back to computer", nextScene: 'computer_unlocked' }
        ]
    },
    'computer_unlocked': {
        text: "You swipe the keycard. The red warning turns green. 'WELCOME, USER 09'. A single file is available: 'TRUTH.LOG'.",
        bg: 'linear-gradient(135deg, #051a05, #000)',
        choices: [
            { text: "Read TRUTH.LOG", nextScene: 'end_game' }
        ]
    },
    'end_game': {
        text: "The file opens. It's a video feed of... you. Standing in this room. Right now. A voice whispers from the speakers: 'Simulation #429 Complete.' \n\n[CONNECTION TERMINATED]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
