// let <variable_name>: type[] = [val1, val2, val3.....]

let ids: number[] = [1,2,34,5,6];
let heterogeneiousArr: any[] = [1, "abhi", 2, false]; // TS way of having heterogeneious arrays

let x: any = "abhi" // any will make the variable work like a normal js variable.
x = 21
x = true


let data: (number | string | boolean)[] = [21, "abhishek", true];

// Arrays in form of typed tuple
// Tuple is set of mutiple values
let data1: [number,string, boolean] = [1,"abhishek", true] // Order matters