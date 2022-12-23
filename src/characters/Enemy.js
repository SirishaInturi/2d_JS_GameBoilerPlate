import config from './config.json';

const enemiesConfig = config.enemies;

class Enemy {
  constructor(type) {
    this.x = enemiesConfig[type].x;
    this.y = enemiesConfig[type].y;
    this.width = enemiesConfig[type].width;
    this.height = enemiesConfig[type].height;
    this.speed = enemiesConfig[type].speed;
    this.spritesheet = new Image();
    this.spritesheet.src = enemiesConfig[type].spritesheet.src;
    this.frameWidth = enemiesConfig[type].spritesheet.frameWidth;
    this.frameHeight = enemiesConfig[type].spritesheet.frameHeight;
    this.numFrames = enemiesConfig[type].spritesheet.numFrames;
    this.states = enemiesConfig[type].states;
    this.currentState = 'idle';
    this.currentFrame = 0;
    this.frameCounter = 0;
  }

  update() {
    this.frameCounter++;
    const fps = this.states[this.currentState].fps;
    const frameIndex = Math.floor(this.frameCounter / fps);
    this.currentFrame = this.states[this.currentState].frames[frameIndex % this.states[this.currentState].frames.length];
  }

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

export default Enemy;
