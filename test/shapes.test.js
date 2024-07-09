const { Circle, Square, Triangle } = require('../lib/shapes.js')

describe('Shape', () => {
    // A test is created to check that Shapes works appropriately.
    describe('render', () => {
      it('should throw an error', () => {
        const text = `<circle cx="150" cy="100" r="80" fill="blue" />
                
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">AAA</text>`
        const shapes = new Circle('blue', 'blue', 'AAA');
        expect(shapes.render()).toEqual(text)
      });
    });
})

describe('Shape', () => {
    // A test is created to check that Shapes works appropriately.
    describe('render', () => {
      it('should throw an error', () => {
        const text = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>

                <text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">AAA</text>`
        const shapes = new Triangle('blue', 'blue', 'AAA');
        expect(shapes.render()).toEqual(text)
      });
    });
})

describe('Shape', () => {
    // A test is created to check that Shapes works appropriately.
    describe('render', () => {
      it('should throw an error', () => {
        const text = `<rect x="75" y="50" width="150" height="150" fill="blue"/>
                
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">AAA</text>`
        const shapes = new Square('blue', 'blue', 'AAA');
        expect(shapes.render()).toEqual(text)
      });
    });
})