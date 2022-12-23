class LevelLoader {
  constructor() {
    this.levels = [];
    this.currentLevelIndex = 0;
  }

  // Method to add a level to the LevelLoader
  addLevel(level) {
    this.levels.push(level);
  }

  // Method to load the current level
  loadLevel() {
    this.levels[this.currentLevelIndex].loadAssets();
  }

  // Method to update the current level
  update(deltaTime) {
    this.levels[this.currentLevelIndex].update(deltaTime);
  }

  // Method to render the current level
  render(context) {
    this.levels[this.currentLevelIndex].render(context);
  }

  // Method to switch to the next level
  nextLevel() {
    this.currentLevelIndex++;
    this.loadLevel();
  }

  // Method to switch to the previous level
  previousLevel() {
    this.currentLevelIndex--;
    this.loadLevel();
  }
}

export default LevelLoader;
