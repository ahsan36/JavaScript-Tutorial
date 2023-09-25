// intro to arrays
// reference type
// how to create array

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits); // ['apple', 'mango', 'grapes'];
// console.log(fruits[1]); //mango

// let mixed = [1, 2, 3, "string", null, undefined];
// console.log(mixed); // [1, 2, 3, 'string', null, undefined];


// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// fruits[1] = "banana";
// console.log(fruits); // [ 'apple', 'banana', 'grapes' ]

// console.log(typeof fruits); //object

// console.log(Array.isArray(fruits)); //true 

// array push pop

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// push :- add in last

// fruits.push("banana");
// console.log(fruits);

//pop :- remove from last and return removed element

// fruits.pop();
// console.log(fruits); 

// and return removed element

// let poopedFruit = fruits.pop();
// console.log("popped fruit is "+poopedFruit);

// console.log(fruits);

// unshift :- add in starting

// let fruits = ["apple", "mango", "grapes"];
// fruits.unshift("banana");
// console.log(fruits);

//shift :- remove from starting

let fruits = ["apple", "mango", "grapes"];
fruits.shift();
console.log(fruits);