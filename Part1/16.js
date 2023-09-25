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