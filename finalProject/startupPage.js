var wordBlue = 175;
var colorChange = 1;
var wordGreen = 125;
var wordRed = 75;
var spawn = 1;

function startUpPage() {
  background(0);
  rectMode(CENTER);
  textAlign(CENTER);
}

function beginButton() {
  // Creates a Button with the word BEGIN
  fill(205, 15, 15);
  rect(width / 2, height / 2, 400, 160);
  fill(wordRed, wordGreen, wordBlue);
  // Need to better place the text
  textSize(85);
  text('BEGIN!', width / 2, height / 2 + 25);
  colorShift();
}

function colorShift() {
  // Changes the colors of the word to give it a flashing set of words
  wordBlue += colorChange;
  if (wordBlue == 225) {
    colorChange *= -1;
  } else if (wordBlue == 35) {
    colorChange *= -1;
  }
  wordRed += colorChange;
  if (wordRed == 225) {
    colorChange *= -1;
  } else if (wordRed == 35) {
    colorChange *= -1;
  }
  wordGreen += colorChange;
  if (wordGreen == 225) {
    colorChange *= -1;
  } else if (wordGreen == 35) {
    colorChange *= -1;
  }
}

function checkButtons() {
  if (mouseX >= width / 2 - 200
  && mouseX <= width / 2 + 200
  && mouseY >= height / 2 - 80
  && mouseY <= height / 2 + 80) {
    for (var i = 0; i < spawn; i++) {
      pathed[i] = (new PathedEnemy());
    }
    startup = false;
    failure = false;
  }
}