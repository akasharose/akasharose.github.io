var timer = 240;
var timerShift = 0;
var bossLimit = 1;
var bossTimer = 30;

function enemyTimer() {
  timer -= 1;
  bossEnemyTimer();
  if (timer === 0) {
    // pathed.push(new PathedEnemy());
    if (boss) {
      timer = 480 - timerShift;
    } else {
      if (timer <= 120) {
        timerShift === 0;
      } else if (timer <= 180) {
        timerShift += 2;
      } else {
        timerShift += 3;
      }
    }
  }
}

function bossEnemyTimer() {
  bossTimer -= 1;
  if (totalCollected >= bossLimit && bossTimer === 0) {
    boss = true;
    bossLimit += 30;
  } else if (bossTimer === 0) {
    bossTimer = 30;
  }
}