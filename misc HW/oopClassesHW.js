// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object. 
// Write a function total_sides that returns the number of sides of the object.


class Circle {
    constructor(color,radius){
    this.color=color
    this.radius=radius
    }
    circle_area(){
        return Math.PI*(this.radius*this.radius)
    }
    circle_circ(){
        return 2*Math.PI*this.radius
    }
}

class Rectangle {
    constructor(color,length1,length2,width1,width2){
        this.color=color
        this.length1=length1
        this.length2=length2
        this.width1=width1
        this.width2=width2
    }

    rect_area(){
        return this.width1*this.length1
    }
    rect_sides(){
        if (this.length1 == this.length2 && this.width1 == this.width2)
        return "Shape is a rectangle and has 4 sides"
        else return "Invalid"
    }
}

class Square {
    constructor(color,length,width){
        this.color=color
        this.length=length
        this.width=width    
    }

    square_area(){
        return this.width1*this.length1
    }
    square_sides(){
        if (this.length == this.width)
        return "Shape has 4 sides and is a square"
        else return "Invalid"
    }
}





const circle1 = new Circle("red",8)
const circle2 = new Circle("blue",5)
const rect1 = new Rectangle("white",5,5,7,7)
const square1 = new Square("blue",5,5)
// console.log(circle1.circle_area())
// console.log(circle2.circle_circ())
// console.log(rect1.rect_area())
console.log(square1.square_sides())