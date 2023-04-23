// Importing Shapes class 
const { Shapes } = require("./Shape");

// Circle class extends Shapes Class
class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />
      <text x="100" y="100" font-family="monospace" font-size="3em" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Circle };
