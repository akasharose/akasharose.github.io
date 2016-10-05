// Creating box constructor Class

// Constructor method of building -- the first function is the 'constructor'
function Brick(xPos, yPos, w, h, color) {
  this.x = xPos;
  this.y = yPos;
  this.w = w;
  this.h = h;
  this.color = color;
  this.visible = true;
}

Brick.prototype.draw = function() {
  if (this.visible) {
    var c = color('hsl(' + this.color + ', 100%, 50%)');
    fill(c);
    rect(this.x, this.y, this.w, this.h);
  }
}