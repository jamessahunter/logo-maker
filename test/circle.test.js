const {Circle} = require('../lib/shape.js');

describe("Circle",()=>{
    it('should render the template literal to make a circle of a given color',()=>{
        const circle = new Circle("","","blue");
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="blue"/>`)

    })
})