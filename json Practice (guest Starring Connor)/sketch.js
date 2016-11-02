function setup() {

  createCanvas(600, 400);
  rectMode(CORNERS);
  line(20, 20, 20, 220);
  line(20, 220, 560, 220);

  loadJSON("jason.json", callbackData);

}

function callbackData(data) {
  var xMove = 30;
  console.log(data.data);

  for (i = 0; i < data.data.length; i++) {
    if (data.data[i][10] !== null) {
      fill(255, 140, 245);
      rect(xMove + (i * 30), 220, xMove + 10 + (i * 30), 220 - (data.data[i][10] * 2));
      
      push();
      translate(xMove + (i * 30), 230);
      rotate(HALF_PI * 2 / 3);
      fill(0);
      text(data.data[i][9] + " (" + data.data[i][8] + ")", 0, 0);
      pop();
      
      push();
      translate(xMove + 3 + (i * 30), 217 - (data.data[i][10] * 2));
      rotate(-QUARTER_PI);
      fill(0);
      text(data.data[i][10] + "%", 0, 0);
      pop();
    } else {
      xMove = xMove - 30;
    }
  }
}