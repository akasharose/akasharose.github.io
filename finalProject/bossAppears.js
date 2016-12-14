bossHealth = 15;
platformChoices = [bottom, middle, middleLeft, middleRight, topLeft, topRight, top];
platformAttacked = 0;
prepareAttack = false;
attacking = false;
attackTimer = 300;
attackingTimer = 300;

function bossAttackTimer() {
  attackTimer -= 1;
  if (attackTimer === 0) {
    prepareAttack = true;
    attackTimer = 755;
  }
}

function bossAttack() {
  platformAttacked = random(platformChoices);
  if (platformAttacked = bottom) {
    var platBotRed += 1;
    var platBotGreen = platAttackedGreen;
    var platBotBlue = platAttackedBlue;
    bossBottom = true;
  } else if (platformAttacked = middle) {
    var platCentRed += 1;
    var platCentGreen = platAttackedGreen;
    var platCentBlue = platAttackedBlue;
    bossMid = true;
  } else if (platformAttacked = middleLeft) {
    var platMidLRed += 1;
    var platMidLGreen = platAttackedGreen;
    var platMidLBlue = platAttackedBlue;
    bossMidL = true;
  } else if (platformAttacked = middleRight) {
    var platMidRRed += 1;
    var platMidRGreen = platAttackedGreen;
    var platMidRBlue = platAttackedBlue;
    bossMidR = true;
  } else if (platformAttacked = topLeft) {
    var platTopLRed += 255;
    var platTopLGreen = platAttackedGreen;
    var platTopLBlue = platAttackedBlue;
    bossTopL = true;
  } else if (platformAttacked = topRight) {
    var platTopRRed += 1;
    var platTopRGreen = platAttackedGreen;
    var platTopRBlue = platAttackedBlue;
    bossTopR = true;
  } else if (platformAttacked = top) {
    var platTopRed += 1;
    var platTopGreen = platAttackedGreen;
    var platTopBlue = platAttackedBlue;
    bossTop = true;
  }
  if (platBotRed == 255 || platCentRed == 255 || platMidLRed == 255 || platMidRRed == 255 || platTopLRed == 255) || platTopRRed == 255 || platTopRed == 255) {
    prepareAttack = false;
    attacking = true;
  }
}

function bossAttackingTimer() {
  attackingTimer -= 1;
  if (attackingTimer === 0) {
    attacking = false;
    resetPlatformColors();
  }
}