function endGamePage() {
  background(0);
  restartButton();
  resetVars();
  // Reset all enemy arrays and variables back to original.
}

function restartButton() {
  // Creates a Button with the word Restart
  fill(205, 15, 15);
  rectMode(CENTER);
  rect(width / 2, height / 2, 400, 160);
  fill(wordRed, wordGreen, wordBlue);
  // Need to better place the text
  textSize(85);
  text('Restart?', width / 2, height / 2 + 25);
  colorShift();
}

function resetVars() {
  charX = 475;
  charY = centY - 75;
  pathed = [];
  timer = 300;
  timerShift = 0;
  var standStill = false;
  var jump = false;
  var grounded = true;
  var collect = true; 
}