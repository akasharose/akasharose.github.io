var collectRed = 70;
var collectGreen = 130;
var collectBlue = 80;
var xPositions = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var yPositions = [108, 256, 404, 556, 736];
var totalCollected = 0;

function drawCollect() {
  fill(collectRed, collectGreen, collectBlue);
  ellipse(xPlace, yPlace, 36, 36)
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
  } while (xPlace == 100 && yPlace == 736 || xPlace == 900 && yPlace == 736);
  collect = false;
}

function getPosition() {
  xPlace = random(xPositions);
  yPlace = random(yPositions);
}

function checkCollect() {
  if (charX + charWidth >= xPlace - 18 && charX <= xPlace + 18 && charY <= yPlace + 18 && charY + charHeight >= yPlace - 18) {
    totalCollected++;
    collect = true;
  }
  killEnemies();
}

function killEnemies() {
  
}