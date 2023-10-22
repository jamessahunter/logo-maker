class Text {
    constructor(text){
        if(text.length>3){
            throw new Error('Text must be less 4 characters long');
        }
        this.text=text;
        console.log(this.text);
    }
}

module.exports=Text;