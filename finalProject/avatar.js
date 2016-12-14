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
  if (charY + charHeight == botY && charX >= botX - charWidth && charX <= botX + botLength) {
    grounded = true;
    if (bossBottom && attacking) {
      failure = true;
    }
    // Check Middle Left
  } else if (charY + charHeight == midPlatsY && charX <= midLeftX + midLength) {
    grounded = true;
    if (bossMidL && attacking) {
      failure = true;
    }
    // Check Middle Right
  } else if (charY + charHeight == midPlatsY && charX >= midRightX - charWidth) {
    grounded = true;
    if (bossMidR && attacking) {
      failure = true;
    }
    // Check Middle
  } else if (charY + charHeight == centY && charX >= centX - charWidth && charX <= centX + centLength) {
    grounded = true;
    if (bossMid && attacking) {
      failure = true;
    }
    // Check Top Left
  } else if (charY + charHeight == topPlatsY && charX <= topLength) {
    grounded = true;
    if (bossTopL && attacking) {
      failure = true;
    }
    // Check Top Right
  } else if (charY + charHeight == topPlatsY && charX >= topRightX - charWidth) {
    grounded = true;
    if (bossTopR && attacking) {
      failure = true;
    }
    // Check Top
  } else if (charY + charHeight == centY2 && charX >= centX - charWidth && charX <= centX + centLength) {
    grounded = true;
    if (bossTop && attacking) {
      failure = true;
    }
    // Gravity
  } else {
    charY += 5;
    grounded = false;
  }
}