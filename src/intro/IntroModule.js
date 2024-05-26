// src/intro/IntroModule.js

import World from "../modules/World.js";

class IntroModule {
  constructor() {
    this.introContainer = document.getElementById("intro-container");
    this.gameContainer = document.getElementById("game-container");
    this.startButton = document.getElementById("start-game-button");
    this.world = new World();
  }

  init() {
    this.startButton.addEventListener("click", () => this.startGame());
  }

  startGame() {
    this.hideIntroContainer();
    this.showGameContainer();
    this.world.generateWorld();
  }

  hideIntroContainer() {
    this.introContainer.style.display = "none";
  }

  showGameContainer() {
    this.gameContainer.classList.remove("hidden");
    this.gameContainer.style.display = "flex";
  }
}

export default IntroModule;
