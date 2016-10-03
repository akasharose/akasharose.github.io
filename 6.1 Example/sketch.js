var bricks = [];

function setup() {
  createCanvas(800, 400);

  for (var y = 0; y < height; y += 22) {
    for (var x = 0; x < width; x += 42) {
      bricks.push(new Brick(x, y, 40, 20, 0));
    }
  }
}

function draw() {
  if (mouseX >= bricks[i].xPos && mouseX <= bricks[i].xPos + bricks[i].w &&
  mouseY >= bricks[i].yPos && mouseY <= bricks[i].yPos + bricks[i].h) {
    
  }
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].draw();
  }
}
