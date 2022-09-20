class Animal {

    constructor(name) {
      this.name = name;
    }
  
}
  
class Rabbit extends Animal {
    constructor(name) {
        //this.name = name; //Because of this there would be an error. There must be super() constructor.
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
//alert(rabbit.name);