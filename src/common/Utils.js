class Utils {
  // Method to clamp a value between a min and max
  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // Method to get a random integer between a min and max
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Method to get a random element from an array
  static getRandomElement(array) {
    return array[Utils.getRandomInt(0, array.length - 1)];
  }

  // Method to check if a point is inside a rectangle
  static pointInRect(x, y, rect) {
    return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
  }
  
  export function distance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
  }

  // Function to get the angle between two points
  export function angle(p1, p2) {
	return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  }
}

export default Utils;
