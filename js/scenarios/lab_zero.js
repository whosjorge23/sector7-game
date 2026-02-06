// Lab Zero Scenario
window.GameContent = window.GameContent || {};

window.GameContent['lab_zero'] = {
    title: "EPISODE 3 // LAB ZERO",
    'start': {
        text: "The heavy blast doors of Lab Zero hiss open. The air is cold, smelling of antiseptic and something metallic. The emergency lights cast a rhythmic red pulse across the room.",
        bg: 'linear-gradient(135deg, #0f1010, #1a0505)',
        choices: [
            { text: "Check the containment vat", nextScene: 'containment_vat' },
            { text: "Consult the security logs", nextScene: 'security_logs' }
        ]
    },
    'containment_vat': {
        text: "The glass is cracked. A thick, iridescent fluid pools on the floor. Within the vat, something that shouldn't be breathing is twitching.",
        bg: 'radial-gradient(circle, #2a0a0a, #000)',
        choices: [
            { text: "Take a sample", nextScene: 'take_sample' },
            { text: "Seal the room", nextScene: 'seal_room' }
        ]
    },
    'security_logs': {
        text: "Entry 04-29: 'Subject 00 has developed digital-biological interfacing capabilities. Recommend immediate incineration.' The log ends with a screen of gibberish.",
        bg: 'linear-gradient(0deg, #111, #050505)',
        choices: [
            { text: "Head back to the vat", nextScene: 'containment_vat' }
        ]
    },
    'take_sample': {
        text: "As you reach for the fluid, a digital screech fills your ears. Your hand begins to pixelate. The virus isn't just in the room; it's in the network.",
        bg: 'linear-gradient(45deg, #ff003c, #000)',
        action: (engine) => engine.addToInventory('Bio-Digital Sample'),
        choices: [
            { text: "Run for the exit", nextScene: 'end_lab' }
        ]
    },
    'seal_room': {
        text: "The containment walls descend, but the screeching on the intercom suggests you just locked yourself in with it. \n\n[ISOLATION END]",
        bg: '#200',
        choices: [
            { text: "Return to Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    },
    'end_lab': {
        text: "You stumble through the doors just as they lock. You have the sample, but you feel a faint flickering in your own vision. \n\n[TO BE CONTINUED]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
