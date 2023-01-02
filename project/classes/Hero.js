class Hero extends GameObject {
  constructor(container, src, x, y, width, height, velX, velY, hp) {
    super(container, src, x, y, width, height, velX, velY);
    this.hp = hp;
    this.div.style.color = "purple";
    this.div.style.fontSize = 25 + "px";
    this.div.style.textShadow = `-2px 0 gray, 0 2px gray, 2px 0 gray, 0 -2px gray`;
  }

  tick() {
    if (rightFlag && this.x + this.width < stageWidth) {
      this.x += heroSpeed;
    }
    if (leftFlag && this.x > 0) {
      this.x -= heroSpeed;
    }
    if (downFlag && this.y + this.height < stageHeight) {
      this.y += heroSpeed;
    }
    if (upFlag && this.y > 0) {
      this.y -= heroSpeed;
    }
  }

  render() {
    this.damage();
    this.damageBoss();
    this.gameOver();
    this.hpRecovery();
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";

    this.div.innerText = this.hp;
    document.getElementsByName("hpInput")[0].value = this.hp;
  }

  damage() {
    for (let i = 0; i < enemyArray.length; i++) {
      if (collisionCheck(this, enemyArray[i])) { //충돌 시 주인공 hp 삭감
        this.hp -= 1;
      }
    }
  }

  damageBoss() {
    if (boss != undefined) {
      if (collisionCheck(this, boss)) { //충돌 시 주인공 hp 삭감
        this.hp -= 3;
      }
    }
  }


  hpRecovery() {
    for (let i = 0; i < hpItemArray.length; i++) {
      if (collisionCheck(this, hpItemArray[i])) { //충돌 시 주인공 hp회복
        hero.hp += 500;

        let index = enemyArray.indexOf(enemyArray[i]);
        stage.div.removeChild(hpItemArray[index].div);
        hpItemArray.splice(index, 1);
      }
    }
  }

  gameOver() {
    if (this.hp <= 0) { //피가 0이되면 게임종료
      this.div.style.backgroundImage = `url(./images/gameover.png)`;
      getGameover();
      gameFlag = false;
    }
  }
}