// Define the PacMan class

// Constructor Method
function PacMan(trans) {
  // The Arc dimensions
  this.pacDiam = 100;
  this.posX = random(this.pacDiam / 2, width - this.pacDiam / 2);
  this.posY = random(this.pacDiam / 2, height - this.pacDiam / 2);
  this.startAngle = 1;
  this.endAngle = 1;
  // The Eye dimensions
  this.eyeX = 1;
  this.eyeY = 1;
  this.eyeDiam = this.pacDiam / 8;
  // The movement variables
  this.pacMoveX = 1;
  this.pacMoveY = 0;
  this.pacSpeeds = [1, 2, 3, 4];
  this.direct = 4;
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
  fill(255, 238, 0);
  arc(this.posX, this.posY, this.pacDiam, this.pacDiam, this.startAngle, this.endAngle);
  fill(0);
  ellipse(this.eyeX, this.eyeY, this.eyeDiam, this.eyeDiam)
};

PacMan.prototype.movePacman = function() {
  this.posX += this.pacMoveX;
  this.posY += this.pacMoveY;
  this.eyeX += this.pacMoveX;
  this.eyeY += this.pacMoveY;
  this.wallCheck();
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
  this.startAngle = HALF_PI + QUARTER_PI / 2;
  this.endAngle = HALF_PI - QUARTER_PI / 2;
  this.eyeX = this.posX + this.pacDiam / 4;
  this.eyeY = this.posY + this.pacDiam / 8;
};

PacMan.prototype.pacRight = function() {
  this.pacMoveX = random(this.pacSpeeds);
  this.pacMoveY = 0;
  this.startAngle = QUARTER_PI / 2;
  this.endAngle = -QUARTER_PI / 2;
  this.eyeX = this.posX + this.pacDiam / 8;
  this.eyeY = this.posY - this.pacDiam / 4;
};

PacMan.prototype.pacUp = function() {
  this.pacMoveY = -random(this.pacSpeeds);
  this.pacMoveX = 0;
  this.startAngle = PI + HALF_PI + QUARTER_PI / 2;
  this.endAngle = PI + HALF_PI - QUARTER_PI / 2;
  this.eyeX = this.posX - this.pacDiam / 4;
  this.eyeY = this.posY - this.pacDiam / 8;
};

PacMan.prototype.pacLeft = function() {
  this.pacMoveX = -random(this.pacSpeeds);
  this.pacMoveY = 0;
  this.startAngle = PI + QUARTER_PI / 2;
  this.endAngle = PI - QUARTER_PI / 2;
  this.eyeX = this.posX - this.pacDiam / 8;
  this.eyeY = this.posY - this.pacDiam / 4;
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