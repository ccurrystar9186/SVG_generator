const { Square, Circle, Triangle } = require("./shapes")


describe('Triangle', () => {
    test('renders correctly', () => {
        const triangle= new Triangle();
        let color = 'blue';
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" stroke="green" fill="${color}" stroke-width="5"/>`);
    })
})

describe('Circle', () => {
    test('renders correctly', () => {
        const circle = new Circle();
        let color = 'red';
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx="25" cy="75" r="20" stroke="red" fill="${color}" stroke-width="5"/>`);
    })
})


describe('Square', () => {
    test('renders correctly', () => {
        const square = new Square();
        let color = 'yellow';
        square.setColor(color);
        expect(square.render()).toEqual(`<rect x="10" y="10" width="30" height="30" stroke="black" fill="${color}" stroke-width="5"/>`);
        
    })    
})    
