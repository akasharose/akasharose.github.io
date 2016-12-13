var timer = 180;
var timerShift = 0;

function enemyTimer() {
  timer -= 1;
  console.log(pathed.length);
  if (timer === 0) {
    pathed.push(new PathedEnemy());
    timer = 180 - timerShift;
    if (timer <= 80) {
      timerShift === 0;
    } else if (timer <= 120) {
      timerShift += 5;
    } else {
      timerShift += 10;
    }
  }
}