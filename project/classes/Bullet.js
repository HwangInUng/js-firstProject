class Bullet extends GameObject {
  constructor(container, src, x, y, width, height, velX, velY) {
    super(container, src, x, y, width, height, velX, velY);
    this.r = 0;
  }

  tick() {
    this.x = getRadiansX(130, this.r, hero.x + 20);
    this.y = getRadiansY(130, this.r, hero.y + 20);
    this.r += 4 + (gamePhase / 2);
    if (this.r >= 360) {  //원이 한바퀴를 돌면 r값 초기화
      this.r = 0;
    }
  }

  render() {
    this.attackEnemy();
    this.attackBoss();
    this.div.style.left = this.x + "px"
    this.div.style.top = this.y + "px"

    document.getElementsByName("scoreInput")[0].value = totalScore;
    document.getElementsByName("phaseInput")[0].value = gamePhase;
  }

  attackEnemy() {
    for (let i = 0; i < enemyArray.length; i++) {
      if (collisionCheck(this, enemyArray[i])) { //총알이 적에게 닿으면 적 hp감소
        let index = enemyArray.indexOf(enemyArray[i]);
        enemyArray[index].hp -= (5 * (gamePhase / 2));

        if (enemyArray[index].hp <= 0) { //적 hp가 0이 되면 삭제
          stage.div.removeChild(enemyArray[index].div);
          enemyArray.splice(index, 1);
          totalScore += 10;   //스코어 증가
          if (totalScore > 0 && gameFlag <= 10) {
            this.gamePhaseUp();
        }
        }
      }
    }
  }

  attackBoss() {
    if (boss != undefined) {
      if (collisionCheck(this, boss)) {
        boss.hp -= 5 * (gamePhase / 2);

        if (boss.Hp <= 0) {
          stage.div.removeChild(boss.div);
          gameFlag = false;
        }
      }
    }
  }

  gamePhaseUp() {
    if (gamePhase <= 10) {
      if (totalScore % (3000 * gamePhase) == 0) {
        gameFlag = false;
        gamePhase++;
        getPhaseup();
      }
    }
  }
}