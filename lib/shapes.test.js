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
        const dimensions = `<rect x="50" y="50" width="150" height="150" style="fill:blue" />`
        expect(triangle.render()).toEqual(dimensions);
      });
    });
  });

describe('Circle', () => {
    describe('circle', () => {
      it('should print a square', () => {
        const triangle = new Shapes.Circle();
        triangle.setColor('blue');
        const dimensions = `<circle cx="100" cy="100" r="75" fill="blue" />`
        expect(triangle.render()).toEqual(dimensions);
      });
    });
  });