class Shape {
    constructor(text,textColor,shape,bgColor){
        this.textColor=textColor;
        this.bgColor=bgColor;
        if(shape==="circle"){
            // console.log("circ");
            this.shape=`<circle cx="150" cy="100" r="100" fill="${this.bgColor}"/>`;
        }
        else if(shape==="square"){
            // console.log("sq");
            this.shape=`<rect x="50" y="0" width="200" height="200" fill="${this.bgColor}"/>`
        }
        else if(shape==="triangle"){
            // console.log("tri");
            this.shape=`<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}"/>`
        }
        else{
            throw new Error('No Shape chosen');
        }
        if(text.length>3){
            throw new Error('Text must be less 4 characters long');
        }
        this.text=`
        <text x="50%" y="50%" text-anchor="middle">
          <tspan font-weight="bold" font-size="32px" fill="${this.textColor}">${text}</tspan>
        </text>`;
        // console.log(this.text);
    }
}

module.exports=Shape;