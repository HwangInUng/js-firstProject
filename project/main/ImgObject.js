class ImgObject{
  constructor(container, src, width, height, y, id){
    this.container = container;
    this.src = src;
    this.width = width;
    this.height = height;
    this.y = y;
    this.id = id;

    this.img = document.createElement("img");
    this.img.src = this.src;
    this.img.style.position = "absolute";
    this.img.style.width = this.width + "%";
    this.img.style.height = this.height + "%";
    this.img.style.top = this.y + "%";
    this.img.id = this.id;

    this.container.appendChild(this.img);
  }
}