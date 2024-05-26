class Tool {
  constructor(name, action, blockType) {
    this.name = name;
    this.action = action;
    this.blockType = blockType;
  }

  useTool(tile, player) {
    if (tile && tile.classList && this.action(tile)) {
      tile.className = "tile white"; // reset the class to 'tile white'
      player.collectBlock(this.blockType); // Increment the player's block count
    }
  }
}

const axe = new Tool("axe", (tile) => tile.classList.contains("tree"), "tree");
const pickaxe = new Tool(
  "pickaxe",
  (tile) => tile.classList.contains("stone"),
  "stone"
);
const shovel = new Tool(
  "shovel",
  (tile) => tile.classList.contains("dirt") || tile.classList.contains("grass"),
  "dirt"
);
const deathwing = new Tool(
  "deathwing",
  (tile) => tile.classList.contains("sky"),
  "sky"
);

function deselectTools() {
  const toolButtons = document.querySelectorAll(".tool-button");
  toolButtons.forEach((btn) => btn.classList.remove("selected-tool"));
  document.body.style.cursor = "auto";
}

export { axe, pickaxe, shovel, deathwing, deselectTools };
