// map method

// const numbers = [3, 4, 6, 1, 8];

// const square = function (number){
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);


// const user = [
//     {firstName : "Ahsan", age : 22},
//     {firstName : "Ankit", age : 23},
//     {firstName : "Mayank", age : 24},
// ]

// const userName = user.map((user) => {  // Anonymous Function :- does not have any name of a function
//     return user.firstName;
// })

// console.log(userName)



// filter function

// const numbers = [1, 3, 2, 6, 4, 8];

// const isEven = function(number) {
//     return number % 2 === 0;
// }

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// })

// console.log(evenNumbers);



// reduce method

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// console.log(sum);


const userCart = [
    {productId : 1, productName : "Mobile", price : 12000},
    {productId : 2, productName : "Laptop", price : 15000},
    {productId : 3, productName : "Tv", price : 22000}
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) =>{
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);