var victRed = 100;
var victRedShift = 1;
var victGreen = 100;
var victGreenShift = 1;
var victBlue = 100;
var victBlueShift = 1;
var maxShift = 10;
// Creates the Victory Screen
function victoryScreen() {
  textSize(160);
  fill(victRed, victGreen, victBlue);
  textAlign(CENTER);
  text("YOU WIN!", width / 2, height / 2);
  victoryColorShift();
  resetButton();
}
// Changes the color of "YOU WIN!"
function victoryColorShift() {
  victRed += victRedShift;
  victGreen += victGreenShift;
  victBlue += victBlueShift;
  victRedShift = random(-maxShift, maxShift);
  victGreenShift = random(-maxShift, maxShift);
  victBlueShift = random(-maxShift, maxShift);
}