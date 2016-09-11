function setup() {
  createCanvas (1000,500);
  // Create a Background with a random color each time
  x = random (0, 255);
  y = random (0, 255);
  z = random (0, 255);
  background (x, y, z);
  
}
  // Set the rectangle's starting size
  var rectX = 15;
  var rectY = 15;
  
function draw() {
  a = random (0, 255);
  b = random (0, 255);
  c = random (0, 255);
  frameRate (5);
  // The rectangle will slowly grow with no influence from the mouse
  rectX = rectX += 1;
  rectY = rectY += 1;
  // Set variables for Random Color of rectangles
  fill (a, b, c);
  // Rectangle moves with the mouse
  rect (mouseX,mouseY,rectX,rectY);
}