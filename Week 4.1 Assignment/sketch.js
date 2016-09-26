var w = 0;
var z = 0;
var createCircles = true;
var posX = true;
var posY = true;
var trueFalse = [true, false];
// The Canvas can be changed to any size, and the diagram will work the same way
function setup() {
  createCanvas(900, 900);
  rectMode(CENTER);
  randomizeColors();
}
// Calls the shape drawing function, and increases the shift values
function draw() {
  shapes();
  w++;
  z++;
}
// Runs the functions that change all the colors and return the shapes to their standard location
function mousePressed() {
  randomizeColors();
  resetDirection();
  createCircles ^= true;
}
// Randomizes and sets the background and fill colors
function randomizeColors() {
  background(random(0, 255), random(0, 255), random(0, 255));
  fill(random(0, 255), random(0, 255), random(0, 255));
}
// Creates the circles/squares, using if/else statements to find the direction they move
function shapes() {
  for (x = -1; x <= (width / 100) + 1; x++) {
    for (y = -1; y <= (height / 100) + 1; y++) {
      // Checks if the object is moving right or left
      if (posX) {
        // Checks if the object is moving up or down
        if (posY) {
          // Object creation in the Right and Down direction
          if (createCircles) {
            ellipse((x * 100) + w, (y * 100) + z, 50, 50);
          } else {
            rect((x * 100) + w, (y * 100) + z, 45, 45);
          }
          // The else of the up/down check
        } else {
          // Object creation in the right and Up direction
          if (createCircles) {
            ellipse((x * 100) + w, (y * 100) - z, 50, 50);
          } else {
            rect((x * 100) + w, (y * 100) - z, 45, 45);
          }
        }
        // The else of the right/left check
      } else {
        if (posY) {
          // Object creation in the left and Down direction
          if (createCircles) {
            ellipse((x * 100) - w, (y * 100) + z, 50, 50);
          } else {
            rect((x * 100) - w, (y * 100) + z, 45, 45);
          }
        } else {
          // Object creation in the left and Up direction
          if (createCircles) {
            ellipse((x * 100) - w, (y * 100) - z, 50, 50);
          } else {
            rect((x * 100) - w, (y * 100) - z, 45, 45);
          }
        }
      }
    }
  }
}
// Randomizes the direction and shape type, resetting the location of the items.
function resetDirection() {
  posX = random(trueFalse);
  posY = random(trueFalse);
  w = 0;
  z = 0;
}