var platHeight = 48;
var midLeftX = 0;
var midRightX = 700;
var midPlatsY = 590;
var midLength = 300;
var centX = 250;
var centLength = 500;
var centY = 440;
var centY2 = 140;
var botX = 200;
var botLength = 600;
var botY = 770;
var topLeftX = 0;
var topLength = 200;
var topPlatsY = 290;
var topRightX = 800;
var platDefaultRed = 100;
var platDefaultGreen = 67;
var platDefaultBlue = 33;
var platAttackedGreen = 30;
var platAttackedBlue = 15;

var platBotRed = platDefaultRed;
var platBotGreen = platDefaultGreen;
var platBotBlue = platDefaultBlue;
var platCentRed = platDefaultRed;
var platCentGreen = platDefaultGreen;
var platCentBlue = platDefaultBlue;
var platMidPairRed = platDefaultRed;
var platMidPairGreen = platDefaultGreen;
var platMidPairBlue = platDefaultBlue;
var platTopPairRed = platDefaultRed;
var platTopPairGreen = platDefaultGreen;
var platTopPairBlue = platDefaultBlue;
var platTopRed = platDefaultRed;
var platTopGreen = platDefaultGreen;
var platTopBlue = platDefaultBlue;

function drawPlatforms() {
  rectMode(CORNER);
  if (boss) {
    background(170, 30, 15);
  } else {
    background(60, 60, 100);
  }
  // Draw the bottom platform
  fill(platBotRed, platBotGreen, platBotBlue);
  rect(botX, botY, botLength, platHeight);
  // Draw the middle platform
  fill(platCentRed, platCentGreen, platCentBlue);
  rect(centX, centY, centLength, platHeight);
  // Draw the bottom two side platforms
  fill(platMidPairRed, platMidPairGreen, platMidPairBlue);
  rect(midLeftX, midPlatsY, midLength, platHeight);
  rect(midRightX, midPlatsY, midLength, platHeight);
  // Draw the top two platforms
  fill(platTopPairRed, platTopPairGreen, platTopPairBlue);
  rect(topLeftX, topPlatsY, topLength, platHeight);
  rect(topRightX, topPlatsY, topLength, platHeight);
  // Draw the heighest of the platforms
  fill(platTopRed, platTopGreen, platTopBlue);
  rect(centX, centY2, centLength, platHeight);
}

function resetPlatformColors() {
  platBotRed = platDefaultRed;
  platBotGreen = platDefaultGreen;
  platBotBlue = platDefaultBlue;
  platCentRed = platDefaultRed;
  platCentGreen = platDefaultGreen;
  platCentBlue = platDefaultBlue;
  platMidPairRed = platDefaultRed;
  platMidPairGreen = platDefaultGreen;
  platMidPairBlue = platDefaultBlue;
  platTopPairRed = platDefaultRed;
  platTopPairGreen = platDefaultGreen;
  platTopPairBlue = platDefaultBlue;
  platTopRed = platDefaultRed;
  platTopGreen = platDefaultGreen;
  platTopBlue = platDefaultBlue;
}