// Define the PacMan class

// Constructor Method
function PacMan(trans) {
  // The Arc dimensions
  this.pacDiam = 100;
  this.posX = random(this.pacDiam / 2, width - this.pacDiam / 2);
  this.posY = random(this.pacDiam / 2, height - this.pacDiam / 2);
  // Mouth dimensions and movement variables
  this.startAngle = 1;
  this.endAngle = 1;
  this.close = true;
  this.open = false;
  // The Eye dimensions
  this.eyeX = 1;
  this.eyeY = 1;
  this.eyeDiam = this.pacDiam / 8;
  // The movement variables
  this.pacMoveX = 1;
  this.pacMoveY = 0;
  this.pacSpeeds = [1, 2, 3, 4];
  this.direct = 1;
  this.newDirect = 1;
  // The edges for the Pac-Pack
  this.rightEdge = width - this.pacDiam / 2;
  this.leftEdge = this.pacDiam / 2;
  this.upEdge = this.pacDiam / 2;
  this.downEdge = height - this.pacDiam / 2;
  // The timer variables
  this.framePassed = 0;
  this.maxFrameGoal = 360;
  this.frameGoal = random(this.maxFrameGoal / 6, this.maxFrameGoal);
}

PacMan.prototype.drawPacman = function() {
  push();
  // translate(this.posX, this.posY);
  fill(255, 238, 0);
  arc(this.posX, this.posY, this.pacDiam, this.pacDiam, PI * this.startAngle, PI * this.endAngle);
  fill(0);
  ellipse(this.eyeX, this.eyeY, this.eyeDiam, this.eyeDiam)
  pop();
};

PacMan.prototype.movePacman = function() {
  this.posX += this.pacMoveX;
  this.posY += this.pacMoveY;
  this.eyeX += this.pacMoveX;
  this.eyeY += this.pacMoveY;
  // this.pacChew();
  this.wallCheck();
  this.mouthCheck();
};

PacMan.prototype.wallCheck = function() {
  if (this.posX >= this.rightEdge && this.direct == 1) {
    this.stopPlz();
    this.posX = width - this.pacDiam / 2;
  } else if (this.posX <= this.leftEdge && this.direct == 3) {
    this.stopPlz();
    this.posX = this.pacDiam / 2;
  } else if (this.posY >= this.downEdge && this.direct === 0) {
    this.stopPlz();
    this.posY = height - this.pacDiam / 2;
  } else if (this.posY <= this.upEdge && this.direct == 2) {
    this.stopPlz();
    this.posY = this.pacDiam / 2;
  }
};

PacMan.prototype.stopPlz = function() {
  this.pacMoveX = 0;
  this.pacMoveY = 0;
};

PacMan.prototype.pacDirect = function() {
  var newDirect;
  // Does this until the Direction is different
  do {
    (newDirect = floor(random(4)));
  } while (newDirect == this.direct);
  // Changes the direction variable
  this.direct = newDirect;
  // Actually changes the direction
  if (this.direct === 0) {
    this.pacDown();
  } else if (this.direct == 1) {
    this.pacRight();
  } else if (this.direct == 2) {
    this.pacUp();
  } else if (this.direct == 3) {
    this.pacLeft();
  }
};

PacMan.prototype.pacDown = function() {
  this.pacMoveY = random(this.pacSpeeds);
  this.pacMoveX = 0;
  this.startAngle = 176 / 256;
  this.endAngle = 80 / 256;
  this.eyeX = this.posX + this.pacDiam / 4;
  this.eyeY = this.posY + this.pacDiam / 8;
  this.close = true;
  this.open = false;
};

PacMan.prototype.pacRight = function() {
  this.pacMoveX = random(this.pacSpeeds);
  this.pacMoveY = 0;
  this.startAngle = 48 / 256;
  this.endAngle = -48 / 256;
  this.eyeX = this.posX + this.pacDiam / 8;
  this.eyeY = this.posY - this.pacDiam / 4;
  this.close = true;
  this.open = false;
};

PacMan.prototype.pacUp = function() {
  this.pacMoveY = -random(this.pacSpeeds);
  this.pacMoveX = 0;
  this.startAngle = 432 / 256;
  this.endAngle = 336 / 256;
  this.eyeX = this.posX - this.pacDiam / 4;
  this.eyeY = this.posY - this.pacDiam / 8;
  this.close = true;
  this.open = false;
};

PacMan.prototype.pacLeft = function() {
  this.pacMoveX = -random(this.pacSpeeds);
  this.pacMoveY = 0;
  this.startAngle = 304 / 256;
  this.endAngle = 208 / 256;
  this.eyeX = this.posX - this.pacDiam / 8;
  this.eyeY = this.posY - this.pacDiam / 4;
  this.close = true;
  this.open = false;
};

PacMan.prototype.timer = function() {
  if (this.framePassed >= this.frameGoal) {
    this.pacDirect();
    this.framePassed = 0;
    this.frameGoal = random(this.maxFrameGoal / 2, this.maxFrameGoal);
  } else {
    this.framePassed++;
  }
};

PacMan.prototype.pacChew = function() {
  // Move dat Mouth
  if (this.close = true) {
    this.startAngle += -1 / 256;
    this.endAngle += 1 / 256;
  } else if (this.open = true) {
    this.startAngle += 1 / 256;
    this.endAngle += -1 / 256;
  }
};

PacMan.prototype.mouthCheck = function() {
  // Check to see if dat Mouth is done moving in a direction
  if (this.startAngle - this.endAngle <= 0) {
    this.open = true;
    this.close = false;
  } else if (this.startAngle - this.endAngle >= 96 / 256) {
    this.open = false;
    this.close = true;
  }
};