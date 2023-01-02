class Input {
  constructor(container, width, height, position, name) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.position = position;
    this.name = name;

    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.style.position = this.position;
    this.input.style.width = this.width + "%";
    this.input.style.height = this.height + "%";
    this.input.style.backgroundColor = "transparent";
    this.input.style.fontFamily = "AVENGEANCE HEROIC AVENGER";
    this.input.style.color = "purple";
    this.input.style.textAlign = "center";
    this.input.style.fontSize = 40 + "px";
    this.input.style.textShadow = `-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white`;
    this.input.name = this.name;

    this.container.appendChild(this.input);
  }
}