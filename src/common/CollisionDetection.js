class CollisionDetection {
  // Method to check if two objects are colliding
  static isColliding(obj1, obj2) {
    // Calculate the distance between the two objects
    const dx = obj1.x - obj2.x;
    const dy = obj1.y - obj2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the distance is less than the sum of the two objects' radii (for circles)
    // or if the distance is less than the difference between the two objects' widths and heights (for rectangles)
    if (distance < obj1.radius + obj2.radius || distance < Math.abs(obj1.width - obj2.width) / 2 + Math.abs(obj1.height - obj2.height) / 2) {
      return true;
    } else {
      return false;
    }
  }

  // Method to handle a collision between two objects
  static handleCollision(obj1, obj2) {
    // Perform the necessary actions to handle the collision, such as decrementing health points or resetting positions
  }
}

export default CollisionDetection;
