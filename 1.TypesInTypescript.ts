/**
 * 
 * Types in TypeScript
 * 
 * Below are all primitive types in TS
 * string -> store text
 * number -> intergers, real
 * boolean
 * undefined
 * null
 * bigint
 * symbol
 */

// let <variable_name> : number = value;  Type annotation or type signature

let id:number = 6;
let firstname: string = "abhishek";
// firstname = 12; // error TS understands that firstname will store string
var lastname = "bisht"
// lstnmame = false
console.log(id, firstname);


// Union of types
let userId: number | string = "26"
userId = 10;