class Shapes {
  constructor(text, textColor, shapeColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }

  render() {
    let shapeCode = "";
    let centerX, centerY;

    switch (this.shape) {
      case "Circle":
        centerX = 150;
        centerY = 100;
        shapeCode = `<circle cx="${centerX}" cy="${centerY}" r="50" fill="${this.shapeColor}" />`;
        break;
      case "Square":
        centerX = 150;
        centerY = 100;
        shapeCode = `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
        break;
      case "Triangle":
        centerX = 150;
        centerY = 100;
        shapeCode = `<polygon points="100,50 50,150 150,150" fill="${this.shapeColor}" />`;
        break;
      default:
        break;
    }
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent" />
      ${shapeCode}
      <text x="${centerX}" y="${centerY}" font-size="2em" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Shapes };
