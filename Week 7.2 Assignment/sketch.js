pacPack = [];

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
  for (var i = 0; i < 7; i++) {
    pacPack[i] = (new PacMan());
    pacPack[i].pacDirect();
  }
}

function draw() {
  background(200);
  for (var i = 0; i < 7; i++) {
    pacPack[i].drawPacman();
    pacPack[i].movePacman();
    pacPack[i].timer();
    pacCheck();
  }
}

function pacCheck() {
  var curXPos = 0;
  var curYPos = 0;
  var curDist = 0;
  var curXDir = true;
  var curYDir = true;
  var touchDist = 0;

  for (var i = 0; i < pacPack.length; i++) {
    // Set all the variables in the 'i' array to compare
    curXPos = pacPack[i].posX;
    curYPos = pacPack[i].posY;
    touchDist = pacPack[i].pacDiam;
    if (this.direct === 0) {
      curYDir = true;
    } else if (this.direct == 1) {
      curXDir = true;
    } else if (this.direct == 2) {
      curYDir = false;
    } else if (this.direct == 3) {
      curXDir = false;
    }
    // Compare the [i] array to the newly created [j] array
    for (var j = i + 1; j < pacPack.length; j++) {
      curDist = dist(curXPos, curYPos, pacPack[j].posX, pacPack[j].posY);
      if (curDist <= touchDist && pacPack[j].posX >= curXPos && curXDir === true) {
        pacPack[i].stopPlz();
      }
      if (curDist <= touchDist && pacPack[j].posX <= curXPos && curXDir === false) {
        pacPack[i].stopPlz();
      }
      if (curDist <= touchDist && pacPack[j].posY >= curYPos && curYDir === true) {
        pacPack[i].stopPlz();
      }
      if (curDist <= touchDist && pacPack[j].posY <= curYPos && curYDir === false) {
        pacPack[i].stopPlz();
      }
    }
  }
}