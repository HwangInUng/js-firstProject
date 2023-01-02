class GameObject{
  constructor(container, src, x, y, width, height, velX, velY){
    this.container = container;
    this.src = src;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velX = velX;
    this.velY = velY;

    this.div = document.createElement("div");
    this.div.style.position = "absolute";
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.div.style.textAlign = "center";
    this.div.style.backgroundImage = `url(./images/${this.src})`;
    this.div.style.backgroundSize = "cover";
    this.div.style.fontFamily = "AVENGEANCE HEROIC AVENGER";
    this.div.style.color = "purple";
    this.div.style.fontSize = 20 + "px";
    this.div.style.textShadow = `-2px 0 gray, 0 2px gray, 2px 0 gray, 0 -2px gray`;

    this.container.appendChild(this.div);
  }

  tick(){
    this.x += this.velX;
    this.y += this.velY;
  }

  render(){
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
  }
}