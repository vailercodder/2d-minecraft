import { deselectTools } from "./Tool.js";

class Player {
  constructor() {
    this.stats = {
      grass: 0,
      dirt: 0,
      stone: 0,
      tree: 0,
      sky: 0,
    };
    this.selectedTileType = null;
    this.initInventoryUI();
  }

  collectBlock(blockType) {
    if (this.stats[blockType] !== undefined) {
      this.stats[blockType]++;
      this.updateInventoryUI();
    }
  }

  placeBlock(blockType) {
    if (this.stats[blockType] > 0) {
      this.stats[blockType]--;
      this.updateInventoryUI();
      return true;
    }
    return false;
  }

  initInventoryUI() {
    const inventoryContainer = document.createElement("div");
    inventoryContainer.classList.add("inventory-container");

    const tileTypes = Object.keys(this.stats);
    tileTypes.forEach((tileType) => {
      const tileButton = document.createElement("button");
      tileButton.classList.add("inventory-button");
      tileButton.setAttribute("data-tile", tileType);
      tileButton.textContent = `${tileType}: ${this.stats[tileType]}`;

      tileButton.addEventListener("click", () =>
        this.selectTile(tileButton, tileType)
      );

      inventoryContainer.appendChild(tileButton);
    });

    document.body.appendChild(inventoryContainer);
  }

  selectTile(button, tileType) {
    const buttons = document.querySelectorAll(".inventory-button");
    buttons.forEach((btn) => btn.classList.remove("selected"));

    deselectTools();

    button.classList.add("selected");
    this.selectedTileType = tileType;
    console.log(`Selected tile type: ${tileType}`);
  }

  updateInventoryUI() {
    const tileButtons = document.querySelectorAll(".inventory-button");
    tileButtons.forEach((button) => {
      const tileType = button.getAttribute("data-tile");
      button.textContent = `${tileType}: ${this.stats[tileType]}`;
    });
  }

  placeTile(tile) {
    console.log(`Attempting to place tile: ${this.selectedTileType}`);
    console.log(`Tile class list before placement: ${tile.classList}`);
    console.log(
      `Inventory count for ${this.selectedTileType}: ${
        this.stats[this.selectedTileType]
      }`
    );
    if (
      this.selectedTileType &&
      tile.classList.contains("white") &&
      this.stats[this.selectedTileType] > 0
    ) {
      console.log(`Placing tile: ${this.selectedTileType}`);
      tile.className = `tile ${this.selectedTileType}`;
      this.stats[this.selectedTileType]--;
      this.updateInventoryUI();
      console.log(`Tile class list after placement: ${tile.classList}`);
      console.log(
        `Inventory count after placement: ${this.stats[this.selectedTileType]}`
      );
    } else {
      console.log(`Cannot place tile: ${this.selectedTileType}`);
      console.log(`Tile class list: ${tile.classList}`);
      console.log(`Selected tile type: ${this.selectedTileType}`);
      console.log(`Tile inventory count: ${this.stats[this.selectedTileType]}`);
    }
  }

  getStats() {
    return this.stats;
  }
}

export default Player;
