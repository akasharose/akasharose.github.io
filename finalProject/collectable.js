var collectableSprite
var xPositions = [100, 200, 300, 400, 600, 700, 800, 900];
var yPositions = [108, 256, 404, 556, 736];
var XPlace = 0;
var YPlace = 0;
var oldXPlace = 0;
var oldYPlace = 0;
var totalCollected = 0;
var killNumber = 0;

function drawCollect() {
  image(collectableSprite, xPlace - 18, yPlace - 18);
  if (collect) {
    generateCollectLocation();
  }
  drawScore();
}

function drawScore() {
  textSize(80);
  fill(190, 60, 50);
  text(totalCollected, width / 2, 70)
}

function generateCollectLocation() {
  getPosition();
  do {
    getPosition();
  } while (xPlace == 100 && yPlace == 736 || xPlace == 900 && yPlace == 736 || (oldXPlace == xPlace && oldYPlace == YPlace));
  collect = false;
  oldXPlace = xPlace;
  oldYPlace = yPlace;
}

function getPosition() {
  xPlace = random(xPositions);
  yPlace = random(yPositions);
}

function checkCollect() {
  if (charX + charWidth >= xPlace - 18 && charX <= xPlace + 18 && charY <= yPlace + 18 && charY + charHeight >= yPlace - 18) {
    totalCollected++;
    collect = true;
    collectableCollected.play();
    if (boss) {
      damageBoss();
    } else {
      killEnemies();
    }
  }
}

function killEnemies() {
  pathed.splice(0, 1);
}

function damageBoss() {
  bossHealth -= 1;
  if (bossHealth === 0) {
    boss = false;
    prepareAttacking = false;
    attacking = false;
    attackTimer = 300;
    attackingTimer = 300;
    resetPlatformColors();
    bossHealth = 15;
    bossBottom = false;
    bossMid = false;
    bossMidPair = false;
    bossTopPair = false;
    bossTop = false;
    angry = false;
    bossDeath();
  }
}