// important array method

// for each

// const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//     console.log("index is ",index);
//     // console.log(number * 2);

//     console.log(`${number} * 2 = ${number * 2}`);
// }

// multiplyBy2(numbers[0], 0);


// numbers.forEach(multiplyBy2);

// numbers.forEach(function(number, index) {
//     console.log(`${number} * 2 = ${number * 2}`);
// })


const user = [
    {firstName : "Ahsan", age : 22},
    {firstName : "Ankit", age : 23},
    {firstName : "Mayank", age : 24},
]

user.forEach(function(user){  // Anonymous Function :- does not have any name of a function
    console.log(user.firstName);
})