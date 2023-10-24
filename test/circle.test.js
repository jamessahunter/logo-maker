const {Circle} = require('../lib/shape.js');
//test for circle
describe("Circle",()=>{
    it('should render the template literal to make a circle of a given color',()=>{
        //creates circle object
        const circle = new Circle("","","blue");
        //calls the circle.render and compares to the expected answer
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="blue"/>`)

    })
})