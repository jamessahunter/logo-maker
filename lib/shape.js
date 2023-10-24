//creates a parent constructor class of shape
class Shape {
    constructor(){
        this.textColor=null;
        this.text=null;
        }
        //creates a method for the text
        setText(text,textColor){
        if(text.length>3){
            throw new Error('Text must be less 4 characters long');
        }
        this.textColor=textColor;
        this.text=`
        <text x="50%" y="50%" text-anchor="middle" dy="1em">
          <tspan font-weight="bold" font-size="64px" fill="${this.textColor}">${text}</tspan>
        </text>`;
    }
}

//creates one of the child constructor classes
class Triangle extends Shape{
    constructor(text, textColor,bgColor){
        super();
        //defines properties
        this.textColor = textColor;
        this.bgColor=bgColor;
        this.setText(text, textColor);
    }   
        //creates method to return the template literal for the shape
        render(){ 
            return `<polygon points="150, 0 250, 173.205 50, 173.205" fill="${this.bgColor}"/>`;
        };
}

class Square extends Shape{
    constructor(text, textColor,bgColor){
        super();
        this.textColor = textColor;
        this.bgColor=bgColor;
        this.setText(text, textColor);
    }
    render(){
        return `<rect x="50" y="0" width="200" height="200" fill="${this.bgColor}"/>`
    }
}

class Circle extends Shape{
    constructor(text, textColor,bgColor){
        super();
        this.textColor = textColor;
        this.bgColor=bgColor;
        this.setText(text, textColor);
    }
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.bgColor}"/>`
    }
}

//exports the constructors for use in other files
module.exports={Triangle,Square,Circle};
