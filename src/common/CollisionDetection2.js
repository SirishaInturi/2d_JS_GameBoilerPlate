class CollisionDetection {
  // Method to check if two game objects are colliding
  isColliding(obj1, obj2) {
    // Check if the bounding boxes of the objects are intersecting
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  }

  // Method to handle a collision between two game objects
  handleCollision(obj1, obj2) {
    // Update the game logic as needed based on the collision
  }
}


export default CollisionDetection;
