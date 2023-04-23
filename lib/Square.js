const { Shapes } = require("./Shape");

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Square };
