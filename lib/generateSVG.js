const { Circle } = require("./shapes");

function createSVG(initials, textColor, shape, backgroundColor) {

    let newShape = '';
    if (shape === 'circle') {
        newShape = new Circle()
        return newShape
    } else if (shape === 'triangle') {
        newShape = new Circle()
        return newShape
    } else if (shape === 'square') {
        newshape = new Circle()
        return newShape
    }

    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <link rel="stylesheet" href="../dist/style.css" type="text/css" />

  <rect width="100%" height="100%" fill="transparent" />

  ${newShape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>

</svg>`
}

module.exports = { createSVG };