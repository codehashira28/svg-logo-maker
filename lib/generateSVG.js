function generateSVG(data) {
    const Shapes = require('./shapes');
    const newShape = data.shape;
    const svgShape = new Shapes[newShape]();
    svgShape.setColor(data.shapeColor);
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgShape.render()}</svg>
    `
}

module.exports = generateSVG;