// Ghost Signal Scenario
window.GameContent = window.GameContent || {};

window.GameContent['ghost_signal'] = {
    title: "EPISODE 6 // GHOST SIGNAL",
    'start': {
        text: "The old radio tower stands like a skeletal finger against the storm. Inside, the equipment is decades old, but the dials are spinning on their own. A rhythmic clicking fills the room.",
        bg: 'linear-gradient(180deg, #0a0a0a, #1a1a1a)',
        choices: [
            { text: "Tune the frequency", nextScene: 'tune_radio' },
            { text: "Inspect the transmitter", nextScene: 'transmitter' }
        ]
    },
    'tune_radio': {
        text: "You turn the dial. The static clears for a split second. A voice, young and terrified, whispers: '...they forgot how to wake up.' Then, just white noise.",
        bg: 'radial-gradient(circle, #222, #000)',
        choices: [
            { text: "Follow the signal", nextScene: 'transmitter' }
        ]
    },
    'transmitter': {
        text: "The transmitter is red-hot despite the cold. Behind the rack, you find a recorded tape labeled 'SIGNAL 0'.",
        bg: 'linear-gradient(45deg, #1a1a1a, #000)',
        action: (engine) => engine.addToInventory('Signal Tape'),
        choices: [
            { text: "Play the tape", nextScene: 'play_tape' }
        ]
    },
    'play_tape': {
        text: "You insert the tape. It's not a voice. It's a sequence of numbers. They match your own biometric ID. The tower begins to vibrate violently.",
        bg: 'linear-gradient(0deg, #300, #000)',
        choices: [
            { text: "Escape the tower", nextScene: 'end_ghost' }
        ]
    },
    'end_ghost': {
        text: "You run as the tower collapses behind you. The static in your head hasn't stopped. \n\n[TO BE CONTINUED]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
