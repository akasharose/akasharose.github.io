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
  collectableSprite = loadImage("Sprites/collectable.png");
  pathedEnemyRight = loadImage("Sprites/enemy.png");
  pathedEnemyLeft = loadImage("Sprites/enemyLeft.png");
  backgroundBoss = loadImage("Sprites/backgroundBoss.png");
  bossStill = loadImage("Sprites/boss.png");
  bossAngry = loadImage("Sprites/ANGER.png");
  bossDead = loadImage("Sprites/ded.png");
  avatarStandStillRight = loadImage("Sprites/avatarLazyRight.png");
  avatarStandStillLeft = loadImage("Sprites/avatarLazyLeft.png");
  avatarMovingLeft = loadImage("Sprites/avatarRunningLeft.png");
  avatarMovingRight = loadImage("Sprites/avatarRunningRight.png");
  avatarJumpingLeft = loadImage("Sprites/avatarFallingLeft.png");
  avatarJumpingRight = loadImage("Sprites/avatarFallingRight.png");
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