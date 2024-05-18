function sum(): number {
	return 10;
}

function sum2(a:number, b:number): number {
	return a + b
}

function sum3(a, b): number { // a and b has any type
	return a + b;
}

console.log(sum3(10, "Abhishek")); // error

// Optional paramter -> b
function sum4(a: number, b? : number): number {
	return a + (b || 0)
}


// Typescript(is a development tool) always runs at compile time and at runtime it gets converted into js/
// All the type checking will happen in compile time and not at runtime.