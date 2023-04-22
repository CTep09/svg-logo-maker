const { Shapes } = require('../Shape');

test('SVG string has correct shape color', () => {
    const shapes = new Shapes('text', 'black', 'red', 'Circle');
    const svgString = shapes.render();
    expect(svgString).toEqual(expect.stringContaining('fill="red"'));
  });
  

