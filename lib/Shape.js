class Shapes {
  constructor(text, textColor, shapeColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }

  render() {
    let shapeFunction = shapesFunctions[this.shape] || shapesFunctions.default;
    let shapeCode = shapeFunction(this.shapeColor);

    return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${shapeCode}
      <text x="100" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

const shapesFunctions = {
  Circle: (shapeColor) => `<circle cx="100" cy="100" r="50" fill="${shapeColor}" />`,
  Square: (shapeColor) => `<rect x="50" y="50" width="100" height="100" fill="${shapeColor}" />`,
  Triangle: (shapeColor) => `<polygon points="100,50 50,150 150,150" fill="${shapeColor}" />`,
  default: () => ""
};

module.exports = { Shapes };

