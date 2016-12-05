var jumpTimer = 45;

function charJump() {
  charY -= 4;
}

function charJumpTimer() {
  jumpTimer -= 1;
  if (jumpTimer === 0) {
    jump = false;
    jumpTimer = 45;
  }
}