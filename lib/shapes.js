class Shape {

    render() {
        throw new Error('Child class must implement render() method.');
    }
}

class Circle extends Shape {
    render(backgroundColor, textColor, initials) {
        return `<circle cx="150" cy="100" r="80" fill="${backgroundColor}" />
                
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>`
    }
}

class Triangle extends Shape {
    render(backgroundColor, textColor, initials) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}"/>

                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>`
    }
}

class Square extends Shape {
    render(backgroundColor, textColor, initials) {
        return `<rect x="75" y="50" width="150" height="150" fill="${backgroundColor}"/>
                
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>`
    }
}

module.exports = { Shape, Circle, Triangle, Square };