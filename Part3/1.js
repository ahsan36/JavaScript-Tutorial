// synchronous programming vs asynchronous programming

// synchronous programming // line by line execute
// Synchronous JavaScript is the programming approach where tasks of a program are executed sequentially one at a time

// synchronous programming single threaded

// console.log("script start");


// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");


// asynchronous programming : Asynchronous JavaScript is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete.

// setTimeout : Provided by browser
// The setTimeout() method allows you to execute a block of code after a certain amount of time has passed.

console.log("script start");

const id = setTimeout(() => {
    console.log("Inside setTimeout");
},1000);

for (let i = 1; i < 10; i++) {
    console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);

console.log("Script end");