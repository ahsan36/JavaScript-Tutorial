// trim()


// let firstName = "    Ahsan   ";
// console.log(firstName);

// console.log(firstName.length);  // length 12

// firstName.trim();
// console.log(firstName.length); // length 12 because string is immutable we can not change in original string it create a new string


// But we can do this

// let newString = firstName.trim(); //create a new string 

// console.log(newString); //it create a new string Ahsan

// console.log(newString.length); // length 5 because it create a new string Ahsan 

// OR we can do this

// firstName = firstName.trim(); //create a new string 

// console.log(firstName); //it create a new string Ahsan

// console.log(firstName.length);  // length 5 because it create a new string Ahsan 


//toUpperCase()

// let firstName = "Ahsan"

// console.log(firstName.toUpperCase());


//toLowerCase

// let firstName = "Ahsan";
// console.log(firstName.toLowerCase());


//slice()

// Start index
// end index

let firstName = "Ahsan";

// let newString = firstName.slice(0, 4); // Ahsa

let newString = firstName.slice(1); // hsan 
console.log(newString);