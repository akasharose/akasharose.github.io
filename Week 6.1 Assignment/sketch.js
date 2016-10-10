// Creates an empty array
var circles = [];

function setup() {
  // Define the Canvas
  createCanvas(1000, 800);
  // Create the array
  for (var i = 0; i < 20; i++) {
    circles[i] = (new ClickCircles(random(60, 200), 1000, 800));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < circles.length; i++) {
    circles[i].drawCircles();
    circles[i].moveCircles();
  }
  createText();
  resetButton();
}

function mousePressed() {
  for (var i = 0; i < circles.length; i++) {
    if (mouseX >= (circles[i].posX - circles[i].circleDiam / 2) &&
      mouseX <= (circles[i].posX + circles[i].circleDiam / 2) &&
      mouseY >= (circles[i].posY - circles[i].circleDiam / 2) &&
      mouseY <= (circles[i].posY + circles[i].circleDiam / 2)) {
      circles[i].circleFate();
    }
  }
  if (mouseX >= 0 && mouseX <= height / 4 &&
    mouseY >= height * (3 / 4) && mouseY <= height) {
    for (var i = 0; i < circles.length; i++) {
      circles[i].reset();
    }
  }
}
// Creates the "Click the Circles!" text.
function createText() {
  fill(255);
  textSize(70);
  text("Click the Circles!", width / 4, 100);
}
// Creates the Reset Button
function resetButton() {
  fill(255, 0, 0);
  rect(0, height * (3 / 4), height * (1 / 4), height * (1 / 4));
  fill(0, 255, 0);
  textSize(40);
  text("RESET", 20, height * (7 / 8))
}