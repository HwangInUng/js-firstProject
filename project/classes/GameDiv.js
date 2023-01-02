class GameDiv {
  constructor(container, position, width, height, border) {
    this.container = container;
    this.position = position;
    this.width = width;
    this.height = height;
    this.border = border;

    this.div = document.createElement("div");
    this.div.style.position = this.position;
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.div.style.border = this.border;

    this.container.appendChild(this.div);
  }
}