import Enemy from './Enemy.js';
import config from './config.json';

const enemiesConfig = config.enemies;

class GroundEnemy extends Enemy {
  constructor() {
    super('groundEnemy');
  }

  // Method to update the ground enemy's state
  update() {
    // Increment the frame counter
    this.frameCounter++;

    // Calculate the current frame based on the current state's FPS and frame counter
    const fps = this.states[this.currentState].fps;
    const frameIndex = Math.floor(this.frameCounter / fps);

    // Set the current frame to the appropriate frame from the current state's frames array
    this.currentFrame = this.states[this.currentState].frames[frameIndex % this.states[this.currentState].frames.length];
  }

  // Method to move the ground enemy to the left
  moveLeft() {
    this.x -= this.speed;
  }

  // Method to move the ground enemy to the right
  moveRight() {
    this.x += this.speed;
  }
}

export default GroundEnemy;
