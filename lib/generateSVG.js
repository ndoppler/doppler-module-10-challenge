const { Circle, Triangle, Square } = require("./shapes");

function createSVG(initials, textColor, shape, backgroundColor) {

    switch (shape) {
        case 'Circle':
            newShape = new Circle(backgroundColor, textColor, initials)
            break;
        case 'Triangle':
            newShape = new Triangle(backgroundColor, textColor, initials)
            break;
        default:
            newShape = new Square(backgroundColor, textColor, initials)
    }

    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="transparent" />

    ${newShape.render()}

    </svg>`
}

module.exports = { createSVG };