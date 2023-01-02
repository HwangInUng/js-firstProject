class HpItem extends GameObject {
  constructor(container, src, x, y, width, height, velX, velY) {
    super(container, src, x, y, width, height, velX, velY);

    this.div.style.border = "2px solid purple";
    this.div.style.borderRadius = 50 + "%";
  }
}