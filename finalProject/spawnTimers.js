var timer = 240;
var timerShift = 0;

function enemyTimer() {
  timer -= 1;
  console.log(pathed.length);
  if (timer === 0) {
    pathed.push(new PathedEnemy());
    timer = 240 - timerShift;
    if (timer <= 120) {
      timerShift === 0;
    } else if (timer <= 180) {
      timerShift += 1;
    } else {
      timerShift += 2;
    }
  }
}