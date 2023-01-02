class Wrapper extends GameDiv{
  constructor(container, position, width, height, border){
    super(container, position, width, height, border);
    this.div.style.overflow = "hidden";
    this.div.style.backgroundImage = "url(./images/space.png)";
    this.div.style.backgroundSize = "cover";
  }
}