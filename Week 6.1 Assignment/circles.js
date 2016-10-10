// clickCircles Class

// Constructor Method
function ClickCircles(diam, screenW, screenH) {
  // Create the size and initial location of the Circles
  this.circleDiam = diam;
  this.posX = random(screenW);
  this.posY = random(screenH);
  // Has the starting direction of the circle.
  this.maxDir = 8;
  this.dirX = random(-3, 3);
  this.dirY = random(-3, 3);

  this.rightEdge = width - this.circleDiam / 2
  this.leftEdge = 0 + this.circleDiam / 2
  this.upEdge = 0 + this.circleDiam / 2
  this.downEdge = height - this.circleDiam / 2

  this.faceColorRed = random(256);
  this.faceColorGreen = random(256);
  this.faceColorBlue = random(256);

  this.change = false;
  this.trueFalse = [true, true, true, false];
  this.visible = true;
}
// Creates the objects
ClickCircles.prototype.drawCircles = function() {
  push();
  fill(this.faceColorRed, this.faceColorGreen, this.faceColorBlue);
  if (this.visible) {
    ellipse(this.posX, this.posY, this.circleDiam, this.circleDiam);
  }
  // text("Press Me!", this.posX, this.posY, this.circleDiam, this.circleDiam / 3);
  pop();
};
// Moves the objects
ClickCircles.prototype.moveCircles = function() {
  this.posX += this.dirX;
  this.posY += this.dirY;
  this.edgeCheck();
};
// Checks if an object hits a wall and will bounce back into the Canvas.
ClickCircles.prototype.edgeCheck = function() {
  if (this.posX >= this.rightEdge) {
    this.dirX = 0 - random(this.maxDir);
  } else if (this.posX <= this.leftEdge) {
    this.dirX = random(this.maxDir);
  } else if (this.posY >= this.downEdge) {
    this.dirY = 0 - random(this.maxDir);
  } else if (this.posY <= this.upEdge) {
    this.dirY = random(this.maxDir);
  }
};
// Changes the Circle's color -- will be one possibility of the mousePressed() function
ClickCircles.prototype.colorChange = function() {
  this.faceColorRed = random(256);
  this.faceColorGreen = random(256);
  this.faceColorBlue = random(256);
};
// Chooses if the circle changes color or dissapears
ClickCircles.prototype.circleFate = function() {
  this.change = random(this.trueFalse);
  if (this.change) {
    this.colorChange();
  } else {
    this.visible = false;
  }
};
ClickCircles.prototype.reset = function() {
  this.visible = true;
  this.faceColorRed = random(256);
  this.faceColorGreen = random(256);
  this.faceColorBlue = random(256);
  this.dirX = random(-3, 3);
  this.dirY = random(-3, 3);
  this.posX = random(this.screenW);
  this.posY = random(this.screenH);
}