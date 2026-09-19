// function UserCreator(){
//     this.name = 'naman'
// }

class Animal{
    constructor(name){
        this.name = name
    }
    //correct
    random(a) {
        console.log(a)
    }

    //not correct
    // random2 = function(){
    //     console.log('something')
    // }
}

class Dog extends Animal{
    constructor(name, petName){
        super(name)
        this.petName = petName
    }
    callMyName(){
        console.log(this.name)
    }
    random(a) {
        console.log('I am dog')
    }
}

const dog1 = new Dog('dogulus', 'robby')
console.log(dog1)

// const animal1 = new Animal('cheetah');
// const animal2 = new Animal('lion')

// console.log(animal1);
// console.log(animal2);


class Shapes{
    constuctor (edges, special){
        this.edges=edges; 
        this.special=special
    }
    getnumberofsides(){ 
        console.log(this.sides)
    } 
}    
class Rectangle extends Shapes{ 
    constructor(sides, special, size){ 
        super(sides, special)
        this.size = size
    }  
}
class Square extends Shapes{
    constuctor(sides, special, color){
        super(sides, special)
        this.color = size;
    }
}

const rectangle1 = new Rectangle(4, 'opposite sides are always same size', "4x5")



class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }

    
    getShapeInfo() {
        return `This is a ${this.name} with ${this.sides} sides.`;
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle", 4); 
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}


class Triangle extends Shape {
    constructor(base, height) {
        super("Triangle", 3);
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
  }

const myRect = new Rectangle(10, 5);
console.log(myRect.getShapeInfo()); 
console.log("Rectangle Area:", myRect.calculateArea()); 

const myTri = new Triangle(10, 8);
console.log(myTri.getShapeInfo());  
console.log("Triangle Area:", myTri.calculateArea());