class Shape {

    render() {
        throw new Error('Child class must implement render() method.');
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${backgroundColor}" />`
    }
}

module.exports = { Circle };