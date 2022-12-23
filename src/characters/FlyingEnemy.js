import Enemy from './Enemy.js';
import config from './config.json';

const enemiesConfig = config.enemies;

class FlyingEnemy extends Enemy {
  constructor() {
    super('flyingEnemy');
  }

  // Method to update the flying enemy's state
  update() {
    // Increment the frame counter
    this.frameCounter++;

    // Calculate the current frame based on the current state's FPS and frame counter
    const fps = this.states[this.currentState].fps;
    const frameIndex = Math.floor(this.frameCounter / fps);

    // Set the current frame to the appropriate frame from the current state's frames array
    this.currentFrame = this.states[this.currentState].frames[frameIndex % this.states[this.currentState].frames.length];
  }

  // Method to move the flying enemy up
  moveUp() {
    this.y -= this.speed;
  }

  // Method to move the flying enemy down
  moveDown() {
    this.y += this.speed;
  }

  // Method to move the flying enemy left
  moveLeft() {
    this.x -= this.speed;
  }

  // Method to move the flying enemy right
  moveRight() {
    this.x += this.speed;
  }
}

export default FlyingEnemy;
