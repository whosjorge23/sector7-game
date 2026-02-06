// Game Engine Logic
class GameEngine {
    constructor() {
        this.state = {
            currentScenario: null,
            currentScene: null,
            inventory: [],
            flags: {}
        };

        this.elements = {
            messageLog: document.getElementById('message-log'),
            choicesContainer: document.getElementById('choices-container'),
            inventoryList: document.getElementById('inventory-list'),
            sceneBg: document.getElementById('scene-image'),
            timeDisplay: document.getElementById('time-display'),
            title: document.getElementById('game-title'),
            footer: document.getElementById('game-footer')
        };

        // Scenarios will be loaded from window.GameContent
        this.scenarios = window.GameContent || {};
    }

    init() {
        this.startTime();

        // Initial state
        history.replaceState({ scenarioId: 'main_menu' }, "", "");

        // Handle browser back/forward buttons
        window.onpopstate = (event) => {
            if (event.state && event.state.scenarioId) {
                this.loadScenario(event.state.scenarioId, false);
            }
        };

        this.loadScenario('main_menu', false);
    }

    startTime() {
        setInterval(() => {
            const now = new Date();
            this.elements.timeDisplay.textContent = now.toLocaleTimeString();
        }, 1000);
    }

    loadScenario(scenarioId, pushToHistory = true) {
        if (!this.scenarios[scenarioId]) {
            console.error('Scenario not found:', scenarioId);
            // Fallback for safety
            if (scenarioId !== 'main_menu') this.loadScenario('main_menu');
            return;
        }

        // Only push if it's a new scenario and requested
        if (pushToHistory && this.state.currentScenario !== scenarioId) {
            // Check if we are moving away from main menu or between scenarios
            history.pushState({ scenarioId }, "", "");
        }

        // Update header title
        if (this.scenarios[scenarioId].title && this.elements.title) {
            this.elements.title.textContent = this.scenarios[scenarioId].title;
        }

        // Toggle inventory footer (hide on main menu)
        if (this.elements.footer) {
            this.elements.footer.style.display = (scenarioId === 'main_menu') ? 'none' : 'block';
        }

        this.state.currentScenario = scenarioId;
        this.state.currentScene = 'start';
        this.state.inventory = [];
        this.state.flags = {};
        this.updateInventoryUI();

        this.renderScene('start');
    }

    typeWriter(text, callback) {
        this.elements.messageLog.innerHTML = ""; // Clear previous
        const p = document.createElement('p');
        p.classList.add('typing-cursor');
        this.elements.messageLog.appendChild(p);

        // Safety check for empty text
        if (!text) {
            if (callback) callback();
            return;
        }

        let i = 0;
        const speed = 25;

        const type = () => {
            if (i < text.length) {
                if (text.charAt(i) === '\n') {
                    p.appendChild(document.createElement('br'));
                } else {
                    p.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(type, speed);
            } else {
                p.classList.remove('typing-cursor');
                if (callback) callback();
            }
        };
        type();
    }

    renderScene(sceneId) {
        const scenario = this.scenarios[this.state.currentScenario];
        const scene = scenario[sceneId];

        if (!scene) return console.error('Scene not found:', sceneId);

        this.state.currentScene = sceneId;

        // Execute scene actions if any
        if (scene.action) scene.action(this); // Pass 'this' so actions can access engine methods

        // Update background
        if (scene.bg) {
            this.elements.sceneBg.style.background = scene.bg;
        }

        // Render Text
        this.elements.choicesContainer.innerHTML = '';
        this.typeWriter(scene.text, () => {
            this.renderChoices(scene.choices);
        });
    }

    renderChoices(choices) {
        this.elements.choicesContainer.innerHTML = '';
        if (!choices) return;

        choices.forEach(choice => {
            // Check conditions
            // Pass 'this' (engine) to conditions if they need state access
            if (choice.condition && !choice.condition(this)) return;

            const btn = document.createElement('button');
            btn.classList.add('choice-btn');
            btn.textContent = `> ${choice.text}`;

            btn.onclick = () => {
                if (choice.action) {
                    // Pass 'this' (engine) so actions can call loadScenario, addToInventory, etc.
                    choice.action(this);

                    // If action triggered a scenario change, we stop here to let that handle rendering
                    if (choice.nextScene && choice.nextScene.startsWith('load_')) return;
                }
                // Only render next scene if it's not a scenario loader action (which would have its own render)
                if (choice.nextScene && !choice.nextScene.startsWith('load_')) {
                    this.renderScene(choice.nextScene);
                }
            };
            this.elements.choicesContainer.appendChild(btn);
        });
    }

    addToInventory(item) {
        if (!this.state.inventory.includes(item)) {
            this.state.inventory.push(item);
            this.updateInventoryUI();
        }
    }

    updateInventoryUI() {
        this.elements.inventoryList.innerHTML = '';
        if (this.state.inventory.length === 0) {
            this.elements.inventoryList.innerHTML = '<li class="empty-slot">EMPTY</li>';
            return;
        }

        this.state.inventory.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('inventory-item');
            li.textContent = item;
            this.elements.inventoryList.appendChild(li);
        });
    }

    resetToMenu() {
        this.loadScenario('main_menu');
    }
}
