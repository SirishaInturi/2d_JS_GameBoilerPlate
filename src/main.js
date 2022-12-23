import ResourceManager from './ResourceManager';
import CollisionDetection from './CollisionDetection';
import Player from './Player';
import Enemy from './Enemy';
import NPC from './NPC';
import Level from './Level';
import LevelLoader from './LevelLoader';
import Menu from './Menu';
import PauseScreen from './PauseScreen';
import Hud from './Hud';
//import * as Matter from 'matter-js'; // If using Matter.js for physics
//------------------------------------------------------------------------------
// Initialize the ResourceManager and load the game assets
const resourceManager = new ResourceManager();
resourceManager.loadAssets();

// Initialize the CollisionDetection class
const collisionDetection = new CollisionDetection();

// Initialize the player and enemy objects
const player = new Player();
const enemy = new Enemy();

// Initialize the NPC objects
const npc1 = new NPC();
const npc2 = new NPC();

// Initialize the LevelLoader and load the first level
const levelLoader = new LevelLoader();
const level = levelLoader.loadLevel(1);

// Initialize the Menu and PauseScreen objects
const menu = new Menu();
const pauseScreen = new PauseScreen();

// Initialize the Hud object
const hud = new Hud();

// Initialize other necessary variables and objects for the game
let gameState = 'menu'; // Current game state (e.g. 'menu', 'level', 'pause')
let deltaTime = 0; // Time since last frame
let lastTimestamp = 0; // Timestamp of last frame

//------------------------------------------------------------------------------

function gameLoop(timestamp) {
  // Calculate the delta time
  deltaTime = timestamp - lastTimestamp;

  // Update the game logic based on the current game state
  switch (gameState) {
    case 'menu':
      // Update the menu logic
      menu.update(deltaTime);
      break;
    case 'level':
      // Update the game logic for the current level
      update(deltaTime);
      break;
    case 'pause':
      // Update the pause screen logic
      pauseScreen.update(deltaTime);
      break;
  }

  // Render the game based on the current game state
  switch (gameState) {
    case 'menu':
      // Render the menu
      menu.render(context);
      break;
    case 'level':
      // Render the current level
      render();
      break;
    case 'pause':
      // Render the pause screen
      pauseScreen.render(context);
      break;
  }

  // Update the HUD
  hud.update(deltaTime);

  // Render the HUD
  hud.render(context);

  // Save the timestamp for the next frame
  lastTimestamp = timestamp;
  requestAnimationFrame(gameLoop);
}

//------------------------------------------------------------------------------

function update(deltaTime) {
  // Update the player and enemy objects
  player.update(deltaTime);
  enemy.update(deltaTime);

  // Update the NPC objects
  npc1.update(deltaTime);
  npc2.update(deltaTime);

  // Check for collisions between the player and enemies
  if (collisionDetection.isColliding(player, enemy)) {
    // Handle the collision between the player and enemy
    collisionDetection.handleCollision(player, enemy);
  }

  // Check for collisions between the player and NPCs
  if (collisionDetection.isColliding(player, npc1)) {
    // Handle the collision between the player and NPC
    collisionDetection.handleCollision(player, npc1);
  }
  if (collisionDetection.isColliding(player, npc2)) {
    // Handle the collision between the player and NPC
    collisionDetection.handleCollision(player, npc2);
  }

  // Check for other collisions as needed
}

function render() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Render the current level
  level.render(context);

  // Render the player and enemy objects
  player.render(context);
  enemy.render(context);

  // Render the NPC objects
  npc1.render(context);
  npc2.render(context);

  // Render other game elements as needed
}

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set the dimensions of the canvas
    const canvas = document.getElementById('gameCanvas');
    canvas.width = config.canvasWidth;
    canvas.height = config.canvasHeight;

    // Initialize the game objects and variables
    const player = new Player(config.playerStartingX, config.playerStartingY);
    const enemy = new Enemy(config.enemyStartingX, config.enemyStartingY);
    const npc1 = new NPC(config.npc1StartingX, config.npc1StartingY);
    const npc2 = new NPC(config.npc2StartingX, config.npc2StartingY);
    const collisionDetection = new CollisionDetection();
    const level = new Level();
    const levelLoader = new LevelLoader();
    const menu = new Menu();
    const pauseScreen = new PauseScreen();
    const hud = new Hud();

    // Start the game loop
    requestAnimationFrame(gameLoop);
  });
