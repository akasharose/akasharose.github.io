// This creates an object
var sadFace = {
  // Define all variables in the object
  faceDiam: 300,
  eyeY: 0,
  eyeX: 0,
  eyeXDiam: 0,
  eyeYDiam: 0,
  mouthX: 0,
  mouthY: 0,
  mouthWidth: 0,
  mouthHeight: 0,

  // This is a function defined in an Object, to be called in setup {}
  // The this. shows that every equation is grabbing a variable from THIS object
  defineFace: function() {
    this.eyeY = 0 - this.faceDiam * (1 / 6);
    this.eyeX = this.faceDiam * (1 / 6);
    this.eyeXDiam = this.faceDiam * (1 / 10);
    this.eyeYDiam = this.faceDiam * (1 / 5);
    this.mouthY = this.faceDiam * (1 / 6);
    this.mouthWidth = this.faceDiam * (2 / 3);
    this.mouthHeight = this.faceDiam * (1 / 5);
  },

  drawFace: function() {
    stroke(0);
    translate(400, 200);
    // Create Face
    fill (255,255,0)
    ellipse(0, 0, sadFace.faceDiam, sadFace.faceDiam);
    // Create Left Eye
    fill (0)
    ellipse(-sadFace.eyeX, sadFace.eyeY, sadFace.eyeXDiam, sadFace.eyeYDiam);
    // Create Right Eye
    ellipse(sadFace.eyeX, sadFace.eyeY, sadFace.eyeXDiam, sadFace.eyeYDiam);
    // Creates Mouth
    arc(sadFace.mouthX, sadFace.mouthY, sadFace.mouthWidth, sadFace.mouthHeight, PI, 0);
    arc(sadFace.mouthX, sadFace.mouthY, sadFace.mouthWidth, sadFace.mouthHeight * (1 / 2), PI, 0);
  }
}

function setup() {
  createCanvas(800, 400);
  sadFace.defineFace();
}

function draw() {
  background(0);
  sadFace.drawFace();
}