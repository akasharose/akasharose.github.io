var circles = [];
var totalClicks = 0;
var accurateClicks = 0;
var number = 0;
var victory = 0;
var startup = true;
var createArray = false;

function setup() {
  // Define the Canvas
  createCanvas(1000, 800);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);
  if (createArray) {
    for (var i = 0; i < number; i++) {
      circles[i] = (new ClickCircles(random(60, 200), 1000, 800));
    }
    createArray = false;
  }
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