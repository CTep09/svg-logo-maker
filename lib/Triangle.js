const { Shapes } = require('./Shape');

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" transform="translate(-50, -2)" />
      <text x="100" y="120" font-size="3em" font-family="monospace" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Triangle };
