const { Circle, Triangle, Square } = require("./shapes");

function createSVG(initials, textColor, shape, backgroundColor) {

    switch (shape) {
        case 'Circle':
            newShape = new Circle()
            break;
        case 'Triangle':
            newShape = new Triangle()
            break;
        default:
            newShape = new Square()
    }

    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <link rel="stylesheet" href="../dist/style.css" type="text/css" />

    <rect width="100%" height="100%" fill="transparent" />

    ${newShape.render(backgroundColor, textColor, initials)}

    </svg>`
}

module.exports = { createSVG };