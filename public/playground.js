class Car {
  constructor(){
     this.wheels = 4;
     this.type = 'Hatchback'
    }
}    

class Ford extends Car {
 
}
//inherit
const ford = new Ford();

console.log(ford.wheels);
