var standStill = false;
var jump = false;
var grounded = true;
var startup = true;
var failure = false;
var collect = true;
var pathed = [];

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
  generateCollectLocation();
}

function draw() {
  if (startup) {
    for (var i = 0; i < 1; i++) {
      pathed[i] = (new PathedEnemy());
    }
    startUpPage();
    beginButton();
  } else {
    if (failure) {
      // endGamePage();
    } else {
      drawWorld();
      moveWorld();
      checkWorld();
    }
  }
}

function mousePressed() {
  checkButtons();
}

function keyPressed() {
  if (keyCode === UP_ARROW && grounded === true) {
    jump = true;
    phase1 = true;
    grounded = false;
  }
}

function drawWorld() {
  drawPlatforms();
  drawCollect();
  drawChar();
  for (var i = 0; i < pathed.length; i++) {
    pathed[i].drawPathedEnemies();
  }
}

function moveWorld() {
  charMove();
  for (var i = 0; i < pathed.length; i++) {
    pathed[i].movePathedEnemies();
  }
}

function checkWorld() {
  locationCheck();
  checkCollect();
  for (var i = 0; i < pathed.length; i++) {
    pathed[i].platformCheck();
    pathed[i].pathedLocationCheck();
  }
  if (jump) {
    charJump();
    charJumpTimer();
  } else {
    gravity();
  }
}