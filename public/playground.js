class Car {
  constructor(){
     this.wheels = 5;
     this.type = 'Hatchback'
    }
}    

class Ford extends Car {
    constructor() {
        super();
        this.windowsCar = 4;
    }
 
}
//inherit
const ford = new Ford();

console.log(ford.wheels);

console.log(ford.windowsCar);
