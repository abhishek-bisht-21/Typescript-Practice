/**
 * How to define types for objects
 * - Classes -> data members, member functions
 * - Interface -> its a contract
 */

class Car {
	name: string
	constructor(name: string){
		this.name = name;
	}

	display(){
		console.log(this.name)
	}
}

// Interfaces donot provide any implementation of member functions.
// They are used to define the structure of an object. They describe an contract that an object should adhere for all its property and methods.

interface Product{
	name: string;
	price: number;
	brand: string

	display(): void;
}

let p1: Product = {
	name: "iPhone",
	price: 100000,
	brand: "apple",

	display: () => {
		console.log("display");
	}
}


// let p1 = new Product(); Not allowed
let c1 = new Car("Baleno");

 