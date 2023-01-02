class Boss extends GameObject{
  constructor(container, src, x, y, width, height, velX, velY, hp){
    super(container, src, x, y, width, height, velX, velY);
    this.hp = hp;
  }

  tick(){
    if(this.x <= hero.width/2 + hero.x && this.y <= hero.height/2 + hero.y){
      this.x += this.velX;
      this.y += this.velY;
    } else if(this.x <= hero.width/2 + hero.x && this.y + this.height/2 >= hero.y){
      this.x += this.velX;
      this.y -= this.velY;
    } else if(this.x >= hero.width/2 + hero.x && this.y <= hero.height/2 + hero.y){
      this.x -= this.velX;
      this.y += this.velY;
    } else if(this.x >= hero.width/2 + hero.x && this.y + this.height >= hero.y){
      this.x -= this.velX;
      this.y -= this.velY;
    }
  }

  render(){
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";

    this.div.innerText = this.hp;
  }
}