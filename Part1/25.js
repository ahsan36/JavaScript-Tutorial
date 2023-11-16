// important array method

// for each

// const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//     console.log("index is ",index);
//     // console.log(number * 2);

//     console.log(`${number} * 2 = ${number * 2}`); // 4 * 2 = 8
// }

// multiplyBy2(numbers[0], 0);


// numbers.forEach(multiplyBy2);

// output:
// index is  0
// 4 * 2 = 8
// index is  1
// 2 * 2 = 4
// index is  2
// 5 * 2 = 10
// index is  3
// 8 * 2 = 16

// numbers.forEach(function(number, index) {
//     console.log(`${number} * 2 = ${number * 2}`);
// })

// output: 
// 4 * 2 = 8
// 2 * 2 = 4
// 5 * 2 = 10
// 8 * 2 = 16


const user = [
    {firstName : "Ahsan", age : 22},
    {firstName : "Ankit", age : 23},
    {firstName : "Mayank", age : 24},
]

user.forEach(function(user){  // Anonymous Function :- does not have any name of a function
    console.log(user.firstName);
})