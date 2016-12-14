var timer = 240;
var timerShift = 0;
var bossLimit = 10;

function enemyTimer() {
  timer -= 1;
  console.log(pathed.length);
  if (timer === 0) {
    if (totalCollected <= bossLimit) {
      pathed.push(new PathedEnemy());
      timer = 240 - timerShift;
      if (timer <= 120) {
        timerShift === 0;
      } else if (timer <= 180) {
        timerShift += 2;
      } else {
        timerShift += 3;
      }
    } else {
      boss = true;
      bossLimit += 30;
    }
  }
}