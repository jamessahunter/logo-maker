class Shape {
    constructor(text,textColor){
        this.textColor=textColor;
        // this.bgColor=bgColor;
        // if(shape==="circle"){
            // console.log("circ");
            // this.shape=`<circle cx="150" cy="100" r="100" fill="${this.bgColor}"/>`;
        // }
        // else if(shape==="square"){
            // console.log("sq");
            // this.shape=`<rect x="50" y="0" width="200" height="200" fill="${this.bgColor}"/>`
        // }
        // else if(shape==="triangle"){
            // console.log("tri");
            // this.shape=`<polygon points="150, 0 250, 173.205 50, 173.205" fill="${this.bgColor}"/>`
        // }
        // else{
        //     throw new Error('No Shape chosen');
        // }
        if(text.length>3){
            throw new Error('Text must be less 4 characters long');
        }
        this.text=`
        <text x="50%" y="50%" text-anchor="middle" dy="1em">
          <tspan font-weight="bold" font-size="64px" fill="${this.textColor}">${text}</tspan>
        </text>`;

        // console.log(this.text);
    }
}

class Triangle extends Shape{
    constructor(text,textColor,bgColor){
        super(text,textColor);
        this.bgColor=bgColor;
        console.log("tri");
    }   
        render(){ 
            console.log(`<polygon points="150, 0 250, 173.205 50, 173.205" fill="${this.bgColor}"/>`);
        };
}

class Square extends Shape{
    constructor(text,textColor,bgColor){
        super(text,textColor);
        this.bgColor=bgColor;
        console.log("sq");
    }
    render(){
        return`<rect x="50" y="0" width="200" height="200" fill="${this.bgColor}"/>`
    }
}

class Circle extends Shape{
    constructor(text,textColor,bgColor){
        super(text,textColor);
        this.bgColor=bgColor;
        console.log("circ");
    }
    render(){
        return`<circle cx="150" cy="100" r="100" fill="${this.bgColor}"/>`
    }
}

module.exports={Shape,Triangle,Square,Circle};
