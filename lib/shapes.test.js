const Shapes = require('./shapes');

describe('Triangle', () => {
  describe('triangle', () => {
    it('should print a triangle', () => {
      const triangle = new Shapes.Triangle();
      triangle.setColor('blue');
      const dimensions = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
      expect(triangle.render()).toEqual(dimensions);
    });
  });
});

describe('Square', () => {
    describe('square', () => {
      it('should print a square', () => {
        const triangle = new Shapes.Square();
        triangle.setColor('blue');
        const dimensions = `<rect width="200" height="200" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />`
        expect(triangle.render()).toEqual(dimensions);
      });
    });
  });

describe('Circle', () => {
    describe('circle', () => {
      it('should print a square', () => {
        const triangle = new Shapes.Circle();
        triangle.setColor('blue');
        const dimensions = `<circle cx="100" cy="100" r="100" stroke="black" stroke-width="3" fill="blue" />`
        expect(triangle.render()).toEqual(dimensions);
      });
    });
  });