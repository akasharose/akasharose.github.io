var timer = 300;
var timerShift = 0;

function enemyTimer() {
  timer -= 1;
  if (timer === 0) {
    for (var i = 0; i < 1; i++) {
      pathed.push = (new PathedEnemy());
      timer = 300 - timerShift;
      if (timer <= 60) {
        timerShift === 0;
      } else if (timer <= 120) {
        timerShift += 5;
      } else {
        timerShift += 10;
      }
    }
  }
}