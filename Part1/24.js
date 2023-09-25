// default parameter

// function addTwo(a, b) {
//     if(typeof b === "undefined"){
//         b = 1;
//     }

//     return a + b;
// }

// const ans = addTwo(4);
// console.log(ans);  // 4 + 1 = 5

// const ans = addTwo(4, 6); 
// console.log(ans); // 4 + 6 = 10


// function addTwo(a, b=1) {   

//     return a + b;
// }

// const ans = addTwo(4);
// console.log(ans);  // 4 + 1 = 5

// const ans = addTwo(4, 6); 
// console.log(ans); // 10


// rest parameter

// function myFunc(a, b, ...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(2, 3, 4, 5, 6);

// Output

/**
 *  a is 2
    b is 3
    c is 4,5,6
 */


// function addAll(...numbers) {
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }

//     return total;
// }

// const ans = addAll(1, 2, 3, 4, 5);
// console.log(ans); // 15


// parameter destructuring

const person = {
    firstName : "Ahsan",
    gender : "Male"
}

// function printDeatails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// printDeatails(person); // Ahsan Male

// parameter destructuring

// function printDeatails({firstName, gender}) {
//     console.log(firstName);
//     console.log(gender);
// }

// printDeatails(person); // Ahsan Male


// callback function

function myFunc2 (){
    console.log("hello world");
}

function myFunc (callback){
    console.log("hello i am func");
    callback();
}

myFunc(myFunc2);

// Output:

// hello i am func
// hello world