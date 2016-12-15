bossHealth = 10;
bossHealthGain = 5;
platformChoices = [0, 1, 2, 3, 4];
platformAttacked = 5;
prepareAttack = false;
attacking = false;
attackTimer = 300;
attackingTimer = 300;
bossBottom = false;
bossMid = false;
bossMidPair = false;
bossTopPair = false;
bossTop = false;

function bossAttackTimer() {
  attackTimer -= 1;
  if (attackTimer === 0) {
    prepareAttack = true;
    attackTimer = 755;
    platformAttacked = random(platformChoices)
  }
}

function bossAttack() {
  if (platformAttacked === 0) {
    platBotRed += 1;
    platBotGreen = platAttackedGreen;
    platBotBlue = platAttackedBlue;
    bossBottom = true;
  } else if (platformAttacked == 1) {
    platCentRed += 1;
    platCentGreen = platAttackedGreen;
    platCentBlue = platAttackedBlue;
    bossMid = true;
  } else if (platformAttacked == 2) {
    platMidPairRed += 1;
    platMidPairGreen = platAttackedGreen;
    platMidPairBlue = platAttackedBlue;
    bossMidPair = true;
  } else if (platformAttacked == 3) {
    platTopPairRed += 1;
    platTopPairGreen = platAttackedGreen;
    platTopPairBlue = platAttackedBlue;
    bossTopPair = true;
  } else if (platformAttacked == 4) {
    platTopRed += 1;
    platTopGreen = platAttackedGreen;
    platTopBlue = platAttackedBlue;
    bossTop = true;
  }
  if (platBotRed == 255 || platCentRed == 255 || platMidPairRed == 255 || platTopPairRed == 255 || platTopRed == 255) {
    prepareAttack = false;
    attacking = true;
  }
}

function bossAttackingTimer() {
  attackingTimer -= 1;
  if (attackingTimer === 0) {
    attacking = false;
    resetPlatformColors();
    bossBottom = false;
    bossMid = false;
    bossMidPair = false;
    bossTopPair = false;
    bossTop = false;
    attackingTimer = 300;
    bossTimer = 3600;
  }
}