// for loop in array

// let fruits = ["apple", "mango", "grapes"];

// let fruits2 = [];

// for(let i=0; i<fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2); // [ 'APPLE', 'MANGO', 'GRAPES' ]


// Use const for creating array

// const fruits = ["apple", "mango"];

// fruits.push("grapes");

// console.log(fruits); // [ 'apple', 'mango', 'grapes' ]


// for of loop in array

// const fruits = ["apple", "mango", "grapes"];

// for(let fruit of fruits){
//     console.log(fruit); // apple mango grapes
// }

// for in loop in array

const fruits = ["apple", "mango", "grapes"];

for(let index in fruits){
    console.log(fruits[index]); // apple mango grapes
}

//  Array Destructuring
let array1 = ["apple", "mango", "grapes", "banana"];

const [myvar, myvar2] = array1;
console.log(myvar); // apple
console.log(myvar2); // mango

// Rest operator

// const [myvar, myvar2, ...myvar3] = array1;

// console.log(myvar); // apple
// console.log(myvar2); // mango
// console.log(myvar3); // [ 'grapes', 'banana' ]