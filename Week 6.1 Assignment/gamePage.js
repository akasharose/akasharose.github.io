function gameScreen() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].drawCircles();
    circles[i].moveCircles();
  }
  createText();
  resetButton();
}

function createText() {
  fill(155, 0, 255);
  textSize(70);
  text("Click the Circles!", width / 4, 100);
  fill (0, 100, 255);
  text("Left:", 700, 700);
  text(number - victory, 850, 700);
}
// Creates the Reset Button
function resetButton() {
  fill(255, 0, 0);
  rectMode(CORNER);
  rect(0, height - 200, 200, 200);
  fill(50, 0, 255);
  textAlign(LEFT);
  textSize(40);
  text("RESET", 20, height - 150);
  textSize(25);
  text("Total Clicks:", 20, height - 110);
  textSize(65);
  text(totalClicks, 40, height - 30);
}

function gameCheck() {
  resetCheck();
  for (var i = 0; i < circles.length; i++) {
    if (circles[i].visible) {
      if (mouseX >= (circles[i].posX - circles[i].circleDiam / 2) &&
        mouseX <= (circles[i].posX + circles[i].circleDiam / 2) &&
        mouseY >= (circles[i].posY - circles[i].circleDiam / 2) &&
        mouseY <= (circles[i].posY + circles[i].circleDiam / 2)) {
        accurateClicks++;
        circles[i].circleFate();
      }
    }
  }
  totalClicks++;
}

function resetCheck() {
  if (mouseX >= 0 && mouseX <= height / 4 &&
    mouseY >= height * (3 / 4) && mouseY <= height) {
    for (var i = 0; i < circles.length; i++) {
      victory = 0;
      circles[i].reset();
    }
  }
}