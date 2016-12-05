var standStill = false;
var jump = false;
var grounded = true;
var startup = true;
var failure = false;
var collect = true;

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
  generateCollectLocation();
}

function draw() {
  if (startup) {
    startUpPage();
    beginButton();
  } else {
    if (failure) {
      // endGamePage();
    } else {
      drawPlatforms();
      drawCollect();
      drawChar();
      charMove();
      locationCheck();
      checkCollect();
      if (jump) {
        charJump();
        charJumpTimer();
      } else {
        charGravity();
      }
    }
  }
}

function mousePressed() {
  checkButtons();
}

function keyPressed() {
  if (keyCode === UP_ARROW && grounded === true) {
    jump = true;
    grounded = false;
  }
}