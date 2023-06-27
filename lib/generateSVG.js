function generateSVG(data) {
    const Shapes = require('./shapes');
    const newShape = data.shape;
    const svgShape = new Shapes[newShape]();
    svgShape.setColor(data.shapeColor);
    if(newShape === "Triangle") {
        return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgShape.render()}
    <text text-anchor="middle" x="148" y="140" fill="${data.textColor}" font-size="2.5rem">${data.text}</text>
    </svg>
    `} else if(newShape === 'Square') {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgShape.render()}
        <text text-anchor="middle" x="125" y="150" fill="${data.textColor}" font-size="3.2rem">${data.text}</text>
        </svg>
        `
    } else {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgShape.render()}
        <text text-anchor="middle" x="100" y="120" fill="${data.textColor}" font-size="3.5rem">${data.text}</text>
        </svg>
        `
    }
    
}

module.exports = generateSVG;