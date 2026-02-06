// Data Vault Scenario
window.GameContent = window.GameContent || {};

window.GameContent['data_vault'] = {
    title: "EPISODE 8 // DATA VAULT PRIME",
    'start': {
        text: "Deep in the mainframe, everything is geometry and light. You are standing before the Core—a pillar of data that holds the secrets of the simulation.",
        bg: 'radial-gradient(circle, #00f3ff, #000)',
        choices: [
            { text: "Insert decryption key", nextScene: 'decryption' },
            { text: "Check firewall status", nextScene: 'firewall' }
        ]
    },
    'decryption': {
        text: "The pillar begins to spin. Layers of encryption fall away like dead skin. In the center, you see a file named 'Project_Antigravity.sys'.",
        bg: 'radial-gradient(circle, #0f0, #000)',
        choices: [
            { text: "Download file", nextScene: 'download_file' }
        ]
    },
    'firewall': {
        text: "Alert! Sentinel programs have detected your presence. Black ice is forming around your avatar.",
        bg: '#400',
        choices: [
            { text: "Initiate emergency logout", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    },
    'download_file': {
        text: "The data floods your consciousness. You see the truth. This isn't a world. It's a prison.",
        bg: 'linear-gradient(45deg, #00f3ff, #ff003c)',
        action: (engine) => engine.addToInventory('Antigravity File'),
        choices: [
            { text: "Disconnect", nextScene: 'end_vault' }
        ]
    },
    'end_vault': {
        text: "You pull the cable from your neck. The real world—if it's even that—is waiting. \n\n[FILE ACQUIRED]",
        bg: '#000',
        choices: [
            { text: "Return to Main Menu", nextScene: 'start', action: (engine) => engine.resetToMenu() }
        ]
    }
};
