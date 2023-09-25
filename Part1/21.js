// hoisting


//  We can call function before (case of function declaration)
hello();  // hello world

function hello(){
    console.log("hello world");
}

// We can not call function before (case of function expression)

// hello(); // error : Cannot access 'hello' before initialization

// const hello = function(){
//     console.log("hello world");
// }


// We can not call function before (case of arrow function)

// hello(); // error : Cannot access 'hello' before initialization

// const hello = () => {
//     console.log("hello world");
// }