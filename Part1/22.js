// Function inside function

// const app = () => {

//     const myFunc = () => {
//         console.log("hello from myFunc");
//     }

//     function add(a, b){
//         return a + b;
//     }

//     const mul = (num1, num2) => num1 * num2;
//     console.log("inside app");

//     myFunc();
//     console.log(add(4, 5));

//     console.log(mul(5, 6));
// }

// app();

// Output

/**
 *  inside app
    hello from myFunc
    9
    30
 */

// lexical scope : also called static scope

const myVar = "Value1"

function myApp(){
    // const myVar = "Value1";

    function myFunc(){
        console.log("Inside function", myVar);
    }

    console.log(myVar);

    myFunc();
}

myApp();

// Output

/**
 *  Value1
    Inside function Value1 
 */