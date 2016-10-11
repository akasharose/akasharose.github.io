// Creates the "Click the Circles!" text.
function startupScreen() {
  createButtons();
  createDifficulty();
}

function createButtons() {
  fill(100);
  rect(width / 2, height / 5 - 25, 200, 80);
  rect(width / 2, height * (2 / 5) - 25, 300, 80);
  rect(width / 2, height * (3 / 5) - 25, 200, 80);
  rect(width / 2, height * (4 / 5) - 25, 250, 80);
}

function createDifficulty() {
  fill(255);
  textSize(80);
  text("CHOOSE DIFFICULTY", width / 2, height / 10);
  textSize(60);
  text("EASY", width / 2, height / 5);
  text("MEDIUM", width / 2, height * (2 / 5));
  text("HARD", width / 2, height * (3 / 5));
  text("CRAZY", width / 2, height * (4 / 5));
}

function checkButtons() {
  // Checks the X location to see if it's in the button area
  // X values draw from the center of the box plus or minus half of the button's width
  // Y yalues draw from the center of the box (height / 5 - 25) plus or minus 40 (half the button's height)
  if (mouseX >= width / 2 - 100 &&
    mouseX <= width / 2 + 100 &&
    mouseY >= height / 5 - 65 &&
    mouseY <= height / 5 + 15) {
    // Create the array with 10 circles
    createArray = true;
    number = 10;
    startup = false;
  } else if (mouseX >= width / 2 - 150 &&
    mouseX <= width / 2 + 150 &&
    mouseY >= height * (2 / 5) - 65 &&
    mouseY <= height * (2 / 5) + 15) {
    createArray = true;
    number = 15;
    startup = false;
  } else if (mouseX >= width / 2 - 100 &&
    mouseX <= width / 2 + 100 &&
    mouseY >= height * (3 / 5) - 65 &&
    mouseY <= height * (3 / 5) + 15) {
    createArray = true;
    number = 20;
    startup = false;
  } else if (mouseX >= width / 2 - 125 &&
    mouseX <= width / 2 + 125 &&
    mouseY >= height * (4 / 5) - 65 &&
    mouseY <= height * (4 / 5) + 15) {
    createArray = true;
    number = 40;
    startup = false;
  }
}