class ScoreUnit extends GameDiv {
  constructor(container, position, width, height, border, src) {
    super(container, position, width, height, border);
    this.src = src;
    this.width = width;
    this.height = height;

    this.div.style.width = this.width + "%";
    this.div.style.height = this.height + "%";

    this.img = document.createElement("img");
    this.img.src = "./images/" + this.src;
    this.img.style.width = 100 + "%";
    this.img.style.height = 100 + "%";

    this.div.appendChild(this.img);
  }
}