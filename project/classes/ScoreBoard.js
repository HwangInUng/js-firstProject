class ScoreBoard extends GameDiv{
  constructor(container, position, width, height, border){
    super(container, position, width, height, border);
    this.div.style.float = "left";
    this.div.style.display = "flex";
    this.div.style.flexDirection = "column";
    this.div.style.alignItems = "center";
    this.div.style.justifyContent = "space-around";
  }
}