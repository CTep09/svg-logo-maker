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
        centerX = 100;
        centerY = 100;
        shapeCode = `<circle cx="${centerX}" cy="${centerY}" r="50" fill="${this.shapeColor}" />`;
        break;
      case "Square":
        centerX = 100;
        centerY = 100;
        shapeCode = `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
        break;
      case "Triangle":
        centerX = 100;
        centerY = 100;
        shapeCode = `<polygon points="100,50 50,150 150,150" fill="${this.shapeColor}" />`;
        break;
      default:
        break;
    }
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${shapeCode}
      <text x="${centerX}" y="${centerY}" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`;
  }
}

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.shapeColor}"/>
        `;
  }
}

module.exports = { Shapes, Circle, Square, Triangle };
