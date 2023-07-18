// how to clone array

// let array1 = ["item1", "item2"];

// // spread operator [...] to copy the array

// let array2 = [...array1]; // ["item1", "item2"]
// array1.push("item3"); // only push in array1 not in array 2 if we use  spread operator

// console.log(array1);

// console.log(array2);

//how to concatenate two array

let array1 = ["item1", "item2"];

let array2 = [].concat(array1, ["item3"]);

console.log(array1);

console.log(array2); //["item1", "item2", "item3"];