// understood callback : A callback is a function passed as an argument to another function.
//  Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// function myFunc(callback) {
//     console.log("function is doing task 1");
//     callback();
// }

// myFunc(() =>{
//     console.log("function is doing task 2");
// })



function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
      onSuccess(number1, number2);
    } else {
      onFailure();
    }
}


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
  
function onFail(){
      console.log("Wrong data type");
      console.log("please pass numbers only")
}
getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);
  