// Import modules
const { Shapes } = require("../Shape");

describe ('Shapes', () => {
test('Shape is a circle', () => {
    const shape = new Shapes('Circle', 'white', 'red', 'Circle');
    const svg = shape.render();
    expect(svg).toContain('circle');
  });

  test('should render a square', () => {
    const shape = new Shapes('Square', 'black', 'yellow', 'Square');
    const svg = shape.render();
    expect(svg).toContain('rect');
  });

  test('should render a triangle', () => {
    const shape = new Shapes('Triangle', 'white', 'green', 'Triangle');
    const svg = shape.render();
    expect(svg).toContain('polygon');
  });
});