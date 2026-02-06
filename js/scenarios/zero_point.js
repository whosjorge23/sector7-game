// Zero Point Scenario
window.GameContent = window.GameContent || {};

window.GameContent['zero_point'] = {
    title: "EPISODE 10 // ZERO POINT",
    'start': {
        text: "Reality is fraying at the edges. You are at the source. The Point where all simulations begin and end. The screen of the universe is glitching, showing code behind the stars.",
        bg: 'repeating-linear-gradient(45deg, #000, #111 10px, #000 20px)',
        choices: [
            { text: "Delete the Source Code", nextScene: 'delete_code' },
            { text: "Accept the Simulation", nextScene: 'acceptance' }
        ]
    },
    'delete_code': {
        text: "You reach into the void. Your fingers feel the cold bite of pure data. 'SYSTEM OVERRIDE DETECTED'. The world dissolves into white.",
        bg: '#fff',
        choices: [
            { text: "Wake up", nextScene: 'end_zero' }
        ]
    },
    'acceptance': {
        text: "The glitches smooth out. The stars return. You are home. But you'll always know the secret. \n\n[SILENT END]",
        bg: '#000',
        choices: [
            { text: "The End", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    },
    'end_zero': {
        text: "You open your eyes. A ceiling of white lights. A voice says: 'Welcome back, Unit 7. Simulation #429. Success.' \n\n[THE ABSOLUTE END]",
        bg: 'linear-gradient(180deg, #fff, #ddd)',
        choices: [
            { text: "REBOOT SYSTEM", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
