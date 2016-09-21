// Set the color variables for the fill and backgrounds
var backRed;
var backGreen;
var backBlue;
var fillRed;
var fillGreen;
var fillBlue;
// Set W and Z equal to zero to start -- the W and Z variables should help to move the circles/ squares in any given direction
var w = 0;
var z = 0;
// Set booleans to allow for switching shape types later.
var createCircles = true;
var createSquares = false;
// Set booleans to allow for randomizing the shape direction later
var posX = true;
var posY = true;
// Allows for randomizing True/False statements during the mousePressed function
var trueFalse = [ true , false ];

function setup() {
  // Creates a Canvas with a random Background color
  createCanvas (800,800);
  // Set Rectangle Mode to Center to keep Circles and Squares centers identical
  rectMode (CENTER);
  // Initial randomization of fill colors for shapes
  fillRed = random (0, 255);
  fillGreen = random (0, 255);
  fillBlue = random (0, 255);
  // Establish randomly colored background
  background (random (256), random (256), random (256));
}

function draw() {
  // Fill color will be randomized every click, this establishes it
  fill (fillRed, fillGreen, fillBlue);
  // If createCircles is true, we will draw Circles
  // An 'if' loop exists that will check what direction on the X and Y axis that the objects are to move,
  // Then, it should grab the correct function and draw the ellipse in the correct direction.
  if (createCircles){
    for (x = 0; x <= 8; x++){
      for (y = 0; y <= 8; y++){
      if (posX){
        if (posY){
          ellipse ((x * 100) + w, (y * 100) + z, 50, 50);
        } else {
          ellipse ((x * 100) + w, (y * 100) - z, 50, 50);
          }
      } else {
        if (posY){
          ellipse ((x * 100) - w, (y * 100) + z, 50, 50);
        } else {
          ellipse ((x * 100) - w, (y * 100) - z, 50, 50);
          }
        }
      }
      }
    }
  // If createSquares is true, we will draw squares
  // Functions the same way as createCircles, but with squares instead of circles.
  if (createSquares){
    for (x = 0; x <= 8; x++){
      for (y = 0; y <= 8; y++){
      if (posX){
        if (posY){
          rect ((x * 100) + w, (y * 100) + z, 50, 50);
        } else {
          rect ((x * 100) + w, (y * 100) - z, 50, 50);
          }
      } else {
        if (posY){
          rect ((x * 100) - w, (y * 100) + z, 50, 50);
        } else {
          rect ((x * 100) - w, (y * 100) - z, 50, 50);
      }
    }
      }
    }
  }
// Increases the shift of the circles/squares to give them movement over time.
  w++
  z++
  }

function mousePressed () {
  // Randomizes all the colors, background and fill
  backRed = random (0, 255);
  backGreen = random (0, 255);
  backBlue = random (0, 255);
  fillRed = random (0, 255);
  fillGreen = random (0, 255);
  fillBlue = random (0, 255);
  // Reestablish background with new colors
  background (backRed, backGreen, backBlue);
  // Switch the shape creating Booleans
  if (createCircles) {
    createCircles = false;
  } else {
    createCircles = true;
  }
  if (createSquares) {
    createSquares = false;
  } else {
    createSquares = true;
  }
  // Randomizes the direction of the object's movement
  posX = random (trueFalse);
  posY = random (trueFalse);
  // Resets the objects location
  w = 0;
  z = 0;
}