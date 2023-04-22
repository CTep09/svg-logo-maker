// Import modules
const { Shapes, Circle, Triangle, Square } = require("../Shape");

describe("Shapes", () => {
  // Test case for circle
  describe("Circle", () => {
    test("returns a circle shape", () => {
      const text = "CAS";
      const textColor = "white";
      const shapeColor = "pink";
      // Create new circle object with the defined variables
      const circle = new Circle(text, textColor, shapeColor);
      // Testing that rendered circle contains "circle"
      expect(circle.render()).toContain("circle");
    });
  });
  describe("Triangle", () => {
    // test case for triangle
    test("returns a triangle shape", () => {
      const text = "CAT";
      const textColor = "red";
      const shapeColor = "pink";
      // Create new triangle object with the defined variables
      const triangle = new Triangle(text, textColor, shapeColor);
      // Testing that rendered triangle contains "polygon"
      expect(triangle.render()).toContain("polygon");
    });
  });
  describe("Square", () => {
    // test case for square shape
    test("returns a square shape", () => {
      const text = "BRT";
      const textColor = "blue";
      const shapeColor = "white";
      // Create new square object with the defined variables
      const square = new Square(text, textColor, shapeColor);
      // Testing that rendered circle contains "circle"
      expect(square.render()).toContain("rect");
    });
  });
});
