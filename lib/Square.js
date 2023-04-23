const { Shapes } = require("./Shape");

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />
      <text x="100" y="100" font-family="monospace" font-size="3em" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Square };
