var timer = 220;
var timerShift = 0;
var bossTimer = 30;

function enemyTimer() {
  timer -= 1;
  bossEnemyTimer();
  if (timer === 0) {
    pathed.push(new PathedEnemy());
    if (boss) {
      timer = 260 - timerShift;
    } else {
      timer = 220 - timerShift
      if (timer <= 120) {
        timerShift === 0;
      } else if (timer <= 178) {
        timerShift += 2;
      } else {
        timerShift += 3;
      }
    }
  }
}

function bossEnemyTimer() {
  bossTimer -= 1;
  if (totalCollected >= 10 && bossTimer === 0) {
    boss = true;
  } else if (bossTimer === 0) {
    bossTimer = 30;
  }
}