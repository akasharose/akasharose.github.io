
// Create an empty array
var sadFaces = [];

function setup() {
  // Define a Canvas
  createCanvas(800, 400);
  
  // Create 'i' numbers of sadFace objects and push() them into the array
  for (var i = 0; i < 100; i++) {
    sadFaces[i] = (new SadFace(random(40, 100), 800, 400));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < sadFaces.length; i++) {
    sadFaces[i].drawFace();
    sadFaces[i].move();
  }

}

function mousePressed() {
  for (var i = 0; i < sadFaces.length; i++) {
    sadFaces[i].flipMouth();
  }
}
