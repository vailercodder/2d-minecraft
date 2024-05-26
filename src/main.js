import IntroModule from "./intro/IntroModule.js";
import World from "./modules/World.js";
import {
  axe,
  pickaxe,
  shovel,
  deathwing,
  deselectTools,
} from "./modules/Tool.js";

document.addEventListener("DOMContentLoaded", () => {
  const introModule = new IntroModule();
  introModule.init();

  const world = new World();
  world.generateWorld();

  // Tool selection
  const toolButtons = document.querySelectorAll(".tool-button");
  toolButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      toolButtons.forEach((btn) => btn.classList.remove("selected-tool"));

      button.classList.add("selected-tool");
      const toolName = button.getAttribute("data-tool");
      const tool = { axe, pickaxe, shovel, deathwing }[toolName];
      tool.useTool();
    });
  });
});
