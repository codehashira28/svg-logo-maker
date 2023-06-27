class Shape {
    setColor(color) {
        this.color = color;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="100" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}

class Square extends Shape { 
    render() {
        return `<rect width="200" height="200" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />`
    }
}

module.exports = {Triangle, Circle, Square};