var charX = 475;
var charY = centY - 75;
var charWidth = 50;
var charHeight = 75;

function drawChar() {
  // Draws the Character -- NEED TO REPLACE WITH SPRITES... EVENTUALLY
  fill(238, 45, 160);
  rect(charX, charY, charWidth, charHeight);
}

function charMove() {
  // Moves the character to the Left and Right accordingly
  // The character cannot go past the edge of the screen.
  if (keyIsDown(LEFT_ARROW)) {
    charX -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    charX += 4;
  }
}

function locationCheck() {
  // Supposed to loop a Character heading off the left side of the screen to the other side
  if (charX + charWidth <= 0) {
    charX = width - 1;
  }
  // Supposed to loop a Character heading off the right side of the screen to the other side
  if (charX >= width) {
    charX = 1 - charWidth;
  }
  if (charY >= height) {
    charY = -charHeight + 5;
  }
}

function gravity() {
  // Check Bottom
  if (charY + 75 == botY && charX >= botX - charWidth && charX <= botX + botLength) {
    grounded = true;
    // Check Bottom Left
  } else if (charY + 75 == midPlatsY && charX <= midLeftX + midLength) {
    grounded = true;
    // Check Bottom Right
  } else if (charY + 75 == midPlatsY && charX >= midRightX - charWidth) {
    grounded = true;
    // Check Middle
  } else if (charY + 75 == centY && charX >= centX - charWidth && charX <= centX + centLength) {
    grounded = true;
    // Check Top Left
  } else if (charY + 75 == topPlatsY && charX <= topLength) {
    grounded = true;
    // Check Top Right
  } else if (charY + 75 == topPlatsY && charX >= topRightX - charWidth) {
    grounded = true;
    // Check Top
  } else if (charY + 75 == centY2 && charX >= centX - charWidth && charX <= centX + centLength) {
    grounded = true;
    // Gravity
  } else {
    charY += 5;
    grounded = false;
  }
}