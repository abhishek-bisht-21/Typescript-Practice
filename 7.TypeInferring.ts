const res = {
	name: "Abhishek",
	marks: 98
}

// the type of the above rawe object is inferred as {name: string, marks: number}
// something like the given object below
// const res : {name: string, marks: number} = {
//      name: ":Abhishek"
// 	marks:98
// }

console.log(res)


// updating an old key-value pair
res.marks = 99; // Allowed in ts


// adding a new key value pair in ts
res.address = "XYZ"; // not allowed 

/**
 * Now the above statement will tyhrow a compiler error bcoz in the type (name: string, marks:number) we never mentioned anything about any address.
 * That's why TS thinks we are violating the default type. To solve this we can add additional optional address property while defining the object.
 * cosnt res: {name: string, marks: number, address? : string} = {
 * name: "Abhishek",
 * marks: 99
 * }
 */