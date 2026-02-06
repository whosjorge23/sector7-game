// Entry point
window.onload = () => {
    // Check if content is loaded
    if (!window.GameContent) {
        console.error("Game Content not loaded!");
        window.GameContent = {};
    }

    const game = new GameEngine();
    game.init();
};
