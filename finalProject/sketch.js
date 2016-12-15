var standStill = false;
var jump = false;
var grounded = true;
var startup = true;
var failure = false;
var collect = true;
var pathed = [];
var boss = false;
var ambientTheme;

function preload() {
  ambientTheme = loadSound("sounds/Revenge of the Cyclops - Castle Crashers.mp3");
  collectableSprite = loadImage("collectable.png");
  pathedEnemyRight = loadImage("enemy.png");
  pathedEnemyLeft = loadImage("enemyLeft.png");
  backgroundBoss = loadImage("backgroundBoss.png");
  bossStill = loadImage("boss.png");
  bossAngry = loadImage("ANGER.png");
  bossDead = loadImage("ded.png");
  avatarStandStillRight = loadImage("avatarLazyRight.png");
  avatarStandStillLeft = loadImage("avatarLazyLeft.png");
  avatarMovingLeft = loadImage("avatarRunningLeft.png");
  avatarMovingRight = loadImage("avatarRunningRight.png");
  avatarJumpingLeft = loadImage("avatarFallingLeft.png");
  avatarJumpingRight = loadImage("avatarFallingRight.png");
}

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