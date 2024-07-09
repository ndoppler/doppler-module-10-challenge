

class Shape {
    constructor(backgroundColor, textColor, initials) {
        this.backgroundColor = backgroundColor,
        this.textColor = textColor,
        this.initials = initials
    }

    render() {
        throw new Error('Child class must implement render() method.');
    }
}

class Circle extends Shape {
    
    constructor(backgroundColor, textColor, initials) {
        super(backgroundColor, textColor, initials)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />
                
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`
    }
}

class Triangle extends Shape {

    constructor(backgroundColor, textColor, initials) {
        super(backgroundColor, textColor, initials)
    }

    render(backgroundColor, textColor, initials) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}"/>

                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`
    }
}

class Square extends Shape {

    constructor(backgroundColor, textColor, initials) {
        super(backgroundColor, textColor, initials)
    }
    
    render(backgroundColor, textColor, initials) {
        return `<rect x="75" y="50" width="150" height="150" fill="${this.backgroundColor}"/>
                
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`
    }
}

module.exports = { Shape, Circle, Triangle, Square };