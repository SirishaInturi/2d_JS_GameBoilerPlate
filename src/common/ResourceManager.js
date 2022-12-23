class ResourceManager {
  constructor() {
    this.assets = {};
  }

  // Method to load an asset
  loadImage(key, src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        this.assets[key] = image;
        resolve(image);
      };
      image.onerror = () => {
        reject(`Failed to load asset: ${src}`);
      };
    });
  }
  // Method to load an audio asset
  loadAudio(key, src) {
    // Create a new audio object and set its src
    const audio = new Audio(src);
    // Add the audio object to the assets object with the specified key
    this.assets[key] = audio;
  }
  // Method to unload an asset
  unloadAsset(key) {
    delete this.assets[key];
  }
  
  // Method to load a resource
  loadResource(name, url) {
    // Create a new image object and set its src to the specified url
    const resource = new Image();
    resource.src = url;

    // Add the image object to the resources object with the specified name as the key
    this.resources[name] = resource;
  }

  // Method to get a resource by name
  getResource(name) {
    return this.resources[name];
  }
}

export default ResourceManager;
