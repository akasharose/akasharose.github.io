var standStill = false;
var jump = false;
var grounded = true;
var startup = true;
var failure = false;
var collect = true;
var pathed = [];
var boss = false;
var ambientTheme;
var bossTheme;

function preload() {
  ambientTheme = loadSound("sounds/Winter Bliss - Castle Crashers.mp3");
  collectableSprite = loadImage("collectable.png");
  pathedEnemyRight = loadImage("enemy.png");
  pathedEnemyLeft = loadImage("enemyLeft.png");
  backgroundNormal = loadImage("backgroundNormal.png");
  backgroundBoss = loadImage("backgroundBoss.png");
  boss = loadImage("boss.png");
}

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
  generateCollectLocation();
  // ambientTheme.loop();
}

function draw() {
  if (startup) {
    startUpPage();
    beginButton();
  } else {
    if (failure) {
      endGamePage();
    } else {
      drawWorld();
      moveWorld();
      checkWorld();
      enemyTimer();
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
  if (prepareAttack) {
    bossAttack();
  }
}

function checkWorld() {
  if (boss) {
    bossAttackTimer();
    if (attacking) {
      bossAttackingTimer();
    }
  }
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