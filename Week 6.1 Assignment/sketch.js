var circles = [];
var totalClicks = 0;
var victRed = 100;
var victRedShift = 1;
var victGreen = 100;
var victGreenShift = 1;
var victBlue = 100;
var victBlueShift = 1;
var maxShift = 10;
var number = 0;
var victory = 0;
var startup = true;

function setup() {
  // Define the Canvas
  createCanvas(1000, 800);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);
  if (startup) {
    startupScreen();
  } else {
    if (victory >= number) {
      victoryScreen();
    } else {
      gameScreen();
    }
  }
}

function mousePressed() {
  if (startup) {
    checkButtons();
  } else {
    gameCheck();
  }
}
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
    for (var i = 0; i < 10; i++) {
      circles[i] = (new ClickCircles(random(60, 200), 1000, 800));
    }
    number = 10;
    startup = false;
  } else if (mouseX >= width / 2 - 150 &&
    mouseX <= width / 2 + 150 &&
    mouseY >= height * (2 / 5) - 65 &&
    mouseY <= height * (2 / 5) + 15) {
    for (var i = 0; i < 15; i++) {
      circles[i] = (new ClickCircles(random(60, 200), 1000, 800));
    }
    number = 15;
    startup = false;
  } else if (mouseX >= width / 2 - 100 &&
    mouseX <= width / 2 + 100 &&
    mouseY >= height * (3 / 5) - 65 &&
    mouseY <= height * (3 / 5) + 15) {
    for (var i = 0; i < 20; i++) {
      circles[i] = (new ClickCircles(random(60, 200), 1000, 800));
    }
    number = 20;
    startup = false;
  } else if (mouseX >= width / 2 - 125 &&
    mouseX <= width / 2 + 125 &&
    mouseY >= height * (4 / 5) - 65 &&
    mouseY <= height * (4 / 5) + 15) {
    for (var i = 0; i < 40; i++) {
      circles[i] = (new ClickCircles(random(60, 200), 1000, 800));
    }
    number = 40;
    startup = false;
  }
}

function gameScreen() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].drawCircles();
    circles[i].moveCircles();
  }
  createText();
  resetButton();
}

function createText() {
  fill(255);
  textSize(70);
  text("Click the Circles!", width / 4, 100);
}
// Creates the Reset Button
function resetButton() {
  fill(255, 0, 0);
  rectMode(CORNER);
  rect(0, height - 200, 200, 200);
  fill(50, 0, 255);
  textAlign(LEFT);
  textSize(40);
  text("RESET", 20, height - 150);
  textSize(25);
  text("Total Clicks:", 20, height - 110);
  textSize(65);
  text(totalClicks, 40, height - 30);
}

function gameCheck() {
  resetCheck();
  for (var i = 0; i < circles.length; i++) {
    circleCheck();
  }
  totalClicks++
}

function circleCheck() {
  if (circles[i].visible) {
    if (mouseX >= (circles[i].posX - circles[i].circleDiam / 2) &&
      mouseX <= (circles[i].posX + circles[i].circleDiam / 2) &&
      mouseY >= (circles[i].posY - circles[i].circleDiam / 2) &&
      mouseY <= (circles[i].posY + circles[i].circleDiam / 2)) {
      circles[i].circleFate();
    }
  }
}

function resetCheck() {
  if (mouseX >= 0 && mouseX <= height / 4 &&
    mouseY >= height * (3 / 4) && mouseY <= height) {
    for (var i = 0; i < circles.length; i++) {
      victory = 0;
      circles[i].reset();
    }
  }
}
// Creates the Victory Screen
function victoryScreen() {
  textSize(140);
  fill(victRed, victGreen, victBlue);
  text("YOU WIN!", width / 6, height / 2);
  victoryColorShift();
  resetButton();
}
// Changes the color of "YOU WIN!"
function victoryColorShift() {
  victRed += victRedShift;
  victGreen += victGreenShift;
  victBlue += victBlueShift;
  victRedShift = random(-maxShift, maxShift);
  victGreenShift = random(-maxShift, maxShift);
  victBlueShift = random(-maxShift, maxShift);
}