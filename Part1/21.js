// hoisting


//  We can call function before (case of function declaration)
hello(); 

function hello(){
    console.log("hello world");
}

// We can not call function before (case of function expression)

// hello(); 

// const hello = function(){
//     console.log("hello world");
// }


// We can not call function before (case of arrow function)

// hello(); 

// const hello = () => {
//     console.log("hello world");
// }