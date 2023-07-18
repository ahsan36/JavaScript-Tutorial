// undefined

// let firstName;
// console.log(typeof firstName); // undefined
// firstName = "Ahsan"
// console.log(firstName);

// //null

// let myVariable = null;
// console.log(myVariable); //null
// console.log(typeof myVariable); //object due to bug in javaScript

// myVariable = "Ahsan"
// console.log(myVariable, typeof myVariable); //Ahsan,  string


//BigInt

let myNumber = BigInt(12);
let sameMyNumber = 123n;

// console.log(myNumber);
console.log(myNumber + sameMyNumber);

// console.log(Number.MAX_SAFE_INTEGER);