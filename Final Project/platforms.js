var platHeight = 48;
var midLeftX = 0;
var midRightX = 700;
var midPlatsY = 590;
var midLength = 300;
var centX = 250;
var centLength = 500;
var centY = 438;
var centY2 = 142;
var botX = 200;
var botLength = 600;
var botY = 770;
var topLeftX = 0;
var topLength = 200;
var topPlatsY = 290;
var topRightX = 800;
var platRed = 101;
var platGreen = 67;
var platBlue = 33;

function drawPlatforms() {
  rectMode(CORNER);
  background(60, 60, 100);
  // Establish base color -- NEED TO ADD TEXTURES TO PLATFORMS!!!!
  fill(platRed, platGreen, platBlue);
  // Draw the bottom platform
  rect(botX, botY, botLength, platHeight);
  // Draw the middle platform
  rect(centX, centY, centLength, platHeight);
  // Draw the bottom two side platforms
  rect(midLeftX, midPlatsY, midLength, platHeight);
  rect(midRightX, midPlatsY, midLength, platHeight);
  // Draw the top two platforms
  rect(topLeftX, topPlatsY, topLength, platHeight);
  rect(topRightX, topPlatsY, topLength, platHeight);
  // Draw the heighest of the platforms
  rect(centX, centY2, centLength, platHeight);
}