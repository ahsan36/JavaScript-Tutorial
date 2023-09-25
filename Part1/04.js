// let keyword
// declare variable with let keyword

let firstName = "Ahsan";
// let firstName = "Ankit"; //We can not declare again firstName variable if we use let keyword 

firstName = "Ankit"; // But we can change the variable data
console.log(firstName); //Ankit

// block scope vs function scope

// block scope


// let and const keywords Block Scope in JavaScript.

// {
//    let x = 2;
//  }
//  // x can NOT be used here
  
//  console.log(x); // error

// {
//    const x = 2;
//  }
//  // x can NOT be used here
  
//  console.log(x); // error



// function scope

// Variables defined inside a function are not accessible (visible) from outside the function.

// function myFunction() {
//     var a = 5;   // Function Scope
//   }
//   function myFunction() {
//     let a = 5;   // Function Scope
//   }
//   function myFunction() {
//     const a = 5;   // Function Scope
//   }