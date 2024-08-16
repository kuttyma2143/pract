class circle {
    constructor(radius=1.0,colour="red") {
      this.radius = radius;
      this.colour = colour;
      
    }
    cir(){

        console.log("RADIUS IS :",this.radius,"COLOUR IS :",this.colour)
        
    }
    getRadius(){
        console.log("RADIUS IS :",this.radius);
    }
     
    setRadius(){
        this.radius=8;
    }
    getColour()
    {
        console.log("COLOUR IS :",this.colour);
    }
    setColour(){
           this.colour="orange"
    }
    toString(){
        console.log("CIRCLE = [RADIUS :",this.radius,"COLOUR IS :",this.colour,"]")
    }
    GetArea(){
        
         console.log(3.14*this.radius*this.radius)
    }
    GetCircumference(){
        
      console.log(2* 3.14 * this.radius)
    }
}

const circle1=new circle(10.00,"white");
const circle2=new circle(16.00,"green");


console.log(circle2.radius);
circle1.cir();
circle1.getRadius();
circle1.setRadius()
console.log(circle1.radius);

circle1.getColour();
circle1.setColour();
console.log(circle1.colour);

circle2.toString();
circle2.GetArea();
circle2.GetCircumference();
