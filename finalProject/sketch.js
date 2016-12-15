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
  ambientTheme = loadSound("sounds/revengeOfTheCyclops.mp3");
  collectableSprite = loadImage("sprites/collectable.png");
  pathedEnemyRight = loadImage("sprites/enemy.png");
  pathedEnemyLeft = loadImage("sprites/enemyLeft.png");
  backgroundBoss = loadImage("sprites/backgroundBoss.png");
  bossStill = loadImage("sprites/boss.png");
  bossAngry = loadImage("sprites/anger.png");
  bossDead = loadImage("sprites/ded.png");
  avatarStandStillRight = loadImage("sprites/avatarLazyRight.png");
  avatarStandStillLeft = loadImage("sprites/avatarLazyLeft.png");
  avatarMovingLeft = loadImage("sprites/avatarRunningLeft.png");
  avatarMovingRight = loadImage("sprites/avatarRunningRight.png");
  avatarJumpingLeft = loadImage("sprites/avatarFallingLeft.png");
  avatarJumpingRight = loadImage("sprites/avatarFallingRight.png");
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