// map method : creates a new array by calling a specific function on each element present in the parent array

// const numbers = [3, 4, 6, 1, 8];

// const square = function (number){
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber); // [ 9, 16, 36, 1, 64 ]


// const user = [
//     {firstName : "Ahsan", age : 22},
//     {firstName : "Ankit", age : 23},
//     {firstName : "Mayank", age : 24},
// ]

// const userName = user.map((user) => {  // Anonymous Function :- does not have any name of a function
//     return user.firstName;
// })

// console.log(userName) // [ 'Ahsan', 'Ankit', 'Mayank' ]


// filter function : creates a new array filled with elements that pass a test provided by a function

// const numbers = [1, 3, 2, 6, 4, 8];

// const isEven = function(number) {
//     return number % 2 === 0;
// }

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// })

// console.log(evenNumbers); // [ 2, 6, 4, 8 ]



// reduce method :  used to reduce the array to a single value

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// console.log(sum);

// accumulator          currentValue      return 
// 1                        2               3
// 3                        3               6
// 6                        4               10
// 10                       5               15


const userCart = [
    {productId : 1, productName : "Mobile", price : 12000},
    {productId : 2, productName : "Laptop", price : 22000},
    {productId : 3, productName : "Tv", price : 15000}
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) =>{
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount); // 49000

// totalPrice              currentValue            return
// 0                            {}                  12000
// 12000                      22000                 34000
// 34000                      15000                 49000