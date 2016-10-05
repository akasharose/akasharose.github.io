// SadFace Class

// Constructor Method for our Class "SadFace"
function SadFace(faceD, scW, scH) {
  this.faceDiam = faceD;
  this.posX = random(scW);
  this.posY = random(scH);

  this.mouthOffset = 0;

  this.dirX = 1;
  this.dirY = 1;
  this.maxDir = 10;

  this.eyeY = 0 - this.faceDiam * (1 / 6);
  this.eyeX = this.faceDiam * (1 / 6);
  this.eyeXDiam = this.faceDiam * (1 / 10);
  this.eyeYDiam = this.faceDiam * (1 / 5);
  this.mouthX = 0;
  this.mouthY = this.faceDiam * (1 / 6);
  this.mouthWidth = this.faceDiam * (2 / 3);
  this.mouthHeight = this.faceDiam * (1 / 5);
  this.maxWidth = width;
  this.maxHeight = height;

  this.faceColorRed = random(256);
  this.faceColorGreen = random(256);
  this.faceColorBlue = random(256);

}

SadFace.prototype.drawFace = function() {
  push();
  fill(this.faceColorRed, this.faceColorGreen, this.faceColorBlue);
  stroke(0);
  // Sad Face Drawing
  translate(this.posX, this.posY);
  // Face
  ellipse(0, 0, this.faceDiam, this.faceDiam);
  // Eyes
  fill(256);
  ellipse(-this.eyeX, this.eyeY, this.eyeXDiam, this.eyeYDiam);
  ellipse(this.eyeX, this.eyeY, this.eyeXDiam, this.eyeYDiam);
  arc(this.mouthX, this.mouthY, this.mouthWidth, this.mouthHeight, PI + this.mouthOffset, 0 + this.mouthOffset);
  arc(this.mouthX, this.mouthY, this.mouthWidth, this.mouthHeight * (1 / 2), PI + this.mouthOffset, 0 + this.mouthOffset);
  pop();
};

SadFace.prototype.move = function() {
  this.posX += this.dirX;
  this.posY += this.dirY;
  this.edgeCheck();
};

SadFace.prototype.flipMouth = function() {
  this.mouthOffset = (this.mouthOffset + PI) % TWO_PI;
};

SadFace.prototype.edgeCheck = function() {
  if (this.posX >= this.maxWidth) {
    this.dirX = 0 - random(this.maxDir);
  } else if (this.posY >= this.maxHeight) {
    this.dirY = 0 - random(this.maxDir);
  } else if (this.posX <= 0) {
    this.dirX = random(this.maxDir);
  } else if (this.posY <= 0) {
    this.dirY = random(this.maxDir);
  }

};

SadFace.prototype.collision = function() {
  this.dirX = -this.dirX;
  this.dirY = -this.dirY;
}