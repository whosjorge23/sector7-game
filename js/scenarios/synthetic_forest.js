// Synthetic Forest Scenario
window.GameContent = window.GameContent || {};

window.GameContent['synthetic_forest'] = {
    title: "EPISODE 9 // SYNTHETIC FOREST",
    'start': {
        text: "The leaves are made of carbon fiber, and the sap glows with a soft cyan light. You are deep in the 'Green Zone', where the corporate experiments have overgrown their boundaries.",
        bg: 'linear-gradient(180deg, #051a05, #000)',
        choices: [
            { text: "Examine a glowing flower", nextScene: 'glowing_flower' },
            { text: "Follow the mechanical birds", nextScene: 'birds' }
        ]
    },
    'glowing_flower': {
        text: "The flower petals unfold reveals a tiny camera lens. It's watching you. The entire forest is a sprawling surveillance network.",
        bg: 'radial-gradient(circle, #0f0, #000)',
        choices: [
            { text: "Disable the lens", nextScene: 'disable_lens' }
        ]
    },
    'birds': {
        text: "The birds aren't singing; they're transmitting data. Their wings make the sound of hard drives spinning. They lead you to a hidden bunker.",
        bg: 'linear-gradient(135deg, #051a05, #111)',
        choices: [
            { text: "Enter the bunker", nextScene: 'bunker' }
        ]
    },
    'disable_lens': {
        text: "You short-circuit the flower. A spark flies, and for a second, the forest goes dark. In the silence, you hear something heavy moving through the brush.",
        bg: '#000',
        action: (engine) => engine.addToInventory('Optical Sensor'),
        choices: [
            { text: "Hide in the shadows", nextScene: 'birds' }
        ]
    },
    'bunker': {
        text: "Inside, you find row after row of stasis pods. Each one contains a clone of the same person: you.",
        bg: 'linear-gradient(180deg, #222, #000)',
        choices: [
            { text: "Escape this nightmare", nextScene: 'end_forest' }
        ]
    },
    'end_forest': {
        text: "You burst through the canopy, the synthetic air burning your lungs. The forest is still growing. \n\n[TO BE CONTINUED]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
