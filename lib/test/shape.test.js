// Import module(s)
const { Circle } = require("../Circle");
const { Triangle } = require("../Triangle");
const { Square } = require("../Square");

describe("Circle", () => {
  it("should render a circle shape in the correct color", () => {
    let text = "CAS";
    let textColor = "pink";
    let shapeColor = "red";

    let circle = new Circle(text, textColor, shapeColor);

    let output = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <circle cx="100" cy="100" r="80" fill="${shapeColor}" />
      <text x="100" y="100" font-family="monospace" font-size="3em" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>`;
    expect(circle.render()).toEqual(output);
  });
});

describe("Triangle", () => {
  it("should render a triangle shape in the correct color", () => {
    let text = "BRT";
    let textColor = "yellow";
    let shapeColor = "green";

    let triangle = new Triangle(text, textColor, shapeColor);

    let output = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" transform="translate(-50, -2)" />
      <text x="100" y="100" font-size="3em" font-family="monospace" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>`;

    expect(triangle.render()).toEqual(output);
  });
});
describe("Square", () => {
  it("should render a square shape in the correct color", () => {
    let text = "CAT";
    let textColor = "purple";
    let shapeColor = "white";

    let square = new Square(text, textColor, shapeColor);

    let output = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <rect x="50" y="50" width="100" height="100" fill="${shapeColor}" />
      <text x="100" y="100" font-family="monospace" font-size="3em" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>`;

    expect(square.render()).toEqual(output);
  });
});


// Check if instance of a parent