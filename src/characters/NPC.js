import config from './config.json';

const NPCsConfig = config.NPCs;

class NPC {
  // Constructor to initialize the NPC's properties
  constructor(type) {
    this.x = NPCsConfig[type].x;
    this.y = NPCsConfig[type].y;
    this.width = NPCsConfig[type].width;
    this.height = NPCsConfig[type].height;
    this.type = NPCsConfig[type].type;
    this.spritesheet = new Image();
    this.spritesheet.src = NPCsConfig[type].spritesheet.src;
    this.frameWidth = NPCsConfig[type].spritesheet.frameWidth;
    this.frameHeight = NPCsConfig[type].spritesheet.frameHeight;
    this.numFrames = NPCsConfig[type].spritesheet.numFrames;
    this.states = NPCsConfig[type].states;
    this.currentState = 'idle';
    this.currentFrame = 0;
    this.frameCounter = 0;
  }

  // Method to update the NPC's state
  update() {
    // Increment the frame counter
    this.frameCounter++;

    // Calculate the current frame based on the current state's FPS and frame counter
    const fps = this.states[this.currentState].fps;
    const frameIndex = Math.floor(this.frameCounter / fps);

    // Set the current frame
    this.currentFrame = this.states[this.currentState].frames[frameIndex % this.states[this.currentState].frames.length];
  }

  // Method to render the NPC
  render(context) {
    // Calculate the source x and y positions for the spritesheet
    const sx = this.currentFrame * this.frameWidth;
    const sy = 0;

    // Draw the NPC on the canvas
    context.drawImage(this.spritesheet, sx, sy, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);
  }
}

export default NPC;
