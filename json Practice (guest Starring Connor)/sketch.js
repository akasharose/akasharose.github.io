function setup() {

  createCanvas(1100, 600);
  rectMode(CORNERS);
  line(20, 20, 20, 200);
  line(20, 200, 1050, 200);

  loadJSON("jason.json", callbackData);

}

function callbackData(data) {
  console.log(data.data);

  for (i = 0; i < data.data.length; i++) {
    fill(0);
    rect(30 + (i * 30), 200, 40 + (i * 30), 200 - (data.data[i][10] * 2));
  }
}