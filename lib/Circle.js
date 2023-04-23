const { Shapes } = require("./Shape");

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Circle };
