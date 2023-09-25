// undefined

// let firstName;
// console.log(typeof firstName); // undefined
// firstName = "Ahsan"
// console.log(firstName); // Ahsan

// //null

// let myVariable = null;
// console.log(myVariable); //null
// console.log(typeof myVariable); // object, due to bug in javaScript

// myVariable = "Ahsan"
// console.log(myVariable, typeof myVariable); //Ahsan,  string


//BigInt
// BigInt is a built-in object in JavaScript that 
// provides a way to represent whole numbers larger than 2^53-1

let myNumber = BigInt(12);
let sameMyNumber = 123n;

// console.log(myNumber); // 12n
console.log(myNumber + sameMyNumber); // 135n

// console.log(Number.MAX_SAFE_INTEGER); 9007199254740991