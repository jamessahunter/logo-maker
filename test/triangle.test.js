const {Triangle} = require('../lib/shape.js');
//same a circle but for triangle
describe("Triangle",()=>{
    it('should render the template literal to make a triangle of a given color',()=>{
        const triangle = new Triangle("","","blue");
        expect(triangle.render()).toBe(`<polygon points="150, 0 250, 173.205 50, 173.205" fill="blue"/>`)

    })
})