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
var platMidLRed = platDefaultRed;
var platMidLGreen = platDefaultGreen;
var platMidLBlue = platDefaultBlue;
var platMidRRed = platDefaultRed;
var platMidRGreen = platDefaultGreen;
var platMidRBlue = platDefaultBlue;
var platTopLRed = platDefaultRed;
var platTopLGreen = platDefaultGreen;
var platTopLBlue = platDefaultBlue;
var platTopRRed = platDefaultRed;
var platTopRGreen = platDefaultGreen;
var platTopRBlue = platDefaultBlue;
var platTopRed = platDefaultRed;
var platTopGreen = platDefaultGreen;
var platTopBlue = platDefaultBlue;

function drawPlatforms() {
  rectMode(CORNER);
  background(60, 60, 100);
  // Draw the bottom platform
  fill(platBotRed, platBotGreen, platBotBlue);
  rect(botX, botY, botLength, platHeight);
  // Draw the middle platform
  fill(platCentRed, platCentGreen, platCentBlue);
  rect(centX, centY, centLength, platHeight);
  // Draw the bottom two side platforms
  fill(platMidLRed, platMidLGreen, platMidLBlue);
  rect(midLeftX, midPlatsY, midLength, platHeight);
  fill(platMidRRed, platMidRGreen, platMidRBlue);
  rect(midRightX, midPlatsY, midLength, platHeight);
  // Draw the top two platforms
  fill(platTopLRed, platTopLGreen, platTopLBlue);
  rect(topLeftX, topPlatsY, topLength, platHeight);
  fill(platTopRRed, platTopRGreen, platTopRBlue);
  rect(topRightX, topPlatsY, topLength, platHeight);
  // Draw the heighest of the platforms
  fill(platTopRed, platTopGreen, platTopBlue);
  rect(centX, centY2, centLength, platHeight);
}

function resetPlatformColors() {
  var platBotRed = platDefaultRed;
  var platBotGreen = platDefaultGreen;
  var platBotBlue = platDefaultBlue;
  var platCentRed = platDefaultRed;
  var platCentGreen = platDefaultGreen;
  var platCentBlue = platDefaultBlue;
  var platMidLRed = platDefaultRed;
  var platMidLGreen = platDefaultGreen;
  var platMidLBlue = platDefaultBlue;
  var platMidRRed = platDefaultRed;
  var platMidRGreen = platDefaultGreen;
  var platMidRBlue = platDefaultBlue;
  var platTopLRed = platDefaultRed;
  var platTopLGreen = platDefaultGreen;
  var platTopLBlue = platDefaultBlue;
  var platTopRRed = platDefaultRed;
  var platTopRGreen = platDefaultGreen;
  var platTopRBlue = platDefaultBlue;
  var platTopRed = platDefaultRed;
  var platTopGreen = platDefaultGreen;
  var platTopBlue = platDefaultBlue;
}