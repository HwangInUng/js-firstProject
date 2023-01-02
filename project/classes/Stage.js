class Stage extends GameDiv {
  constructor(container, position, width, height, border) {
    super(container, position, width, height, border);
    this.div.style.overflow = "hidden";
    this.div.style.display = "flex";
    this.div.style.flexDirection = "column";
    this.div.style.alignItems = "center";
    this.div.style.justifyContent = "center";
    this.div.style.float = "left";
  }
}