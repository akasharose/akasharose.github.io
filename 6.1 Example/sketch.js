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
  background(0);
  for (var i = 0; i < bricks.length; i++) {
    if (mouseX >= bricks[i].x && mouseX <= bricks[i].x + bricks[i].w &&
      mouseY >= bricks[i].y && mouseY <= bricks[i].y + bricks[i].h) {
      bricks[i].visible = false;
    }
    bricks[i].draw();
  }
}