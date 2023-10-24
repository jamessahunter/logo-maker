const {Square} = require('../lib/shape.js');
//same as circle but for square
describe("Square",()=>{
    it('should render the template literal to make a square of a given color',()=>{
        const square = new Square("","","blue");
        expect(square.render()).toBe(`<rect x="50" y="0" width="200" height="200" fill="blue"/>`)

    })
})