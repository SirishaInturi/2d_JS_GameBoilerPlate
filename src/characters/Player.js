import config from './config.json';

const playerConfig = config.player;

class Player {
  constructor() {
    this.x = playerConfig.x;
    this.y = playerConfig.y;
    this.width = playerConfig.width;
    this.height = playerConfig.height;
    this.speed = playerConfig.speed;
    this.spritesheet = new Image();
    this.spritesheet.src = playerConfig.spritesheet.src;
    this.frameWidth = playerConfig.spritesheet.frameWidth;
    this.frameHeight = playerConfig.spritesheet.frameHeight;
    this.numFrames = playerConfig.spritesheet.numFrames;
    this.states = playerConfig.states;
    this.currentState = 'idle';
    this.currentFrame = 0;
    this.frameCounter = 0;
  }

  // Method to update the player's state
  update() {
    // Increment the frame counter
    this.frameCounter++;

    // Calculate the current frame based on the current state's FPS and frame counter
    const fps = this.states[this.currentState].fps;
    const frameIndex = Math.floor(this.frameCounter / fps);

    // Set the current frame to the appropriate frame from the current state's frames array
    this.currentFrame = this.states[this.currentState].frames[frameIndex % this.states[this.currentState].frames.length];
  }

  // Method to move the player
  move(direction) {
    switch (direction) {
      case 'left':
        this.x -= this.speed;
        break;
      case 'right':
        this.x += this.speed;
        break;
      case 'up':
        this.y -= this.speed;
        break;
      case 'down':
        this.y += this.speed;
        break;
      default:
        break;
    }
  }

  // Method to draw the player on the canvas
  draw(canvasContext) {
    canvasContext.drawImage(
      this.spritesheet,
      this.currentFrame * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default Player;
