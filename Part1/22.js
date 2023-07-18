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

// lexical scope

function myApp(){
    const myVar = "Value1";

    function myFunc(){
        console.log("Inside function", myVar);
    }

    console.log(myVar);

    myFunc();
}

myApp();