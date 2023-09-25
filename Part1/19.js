// Functions

// function singHappyBirthday(){
//     console.log("happy birthday to you.....")
// }

// singHappyBirthday(); // happy birthday to you.....
// singHappyBirthday(); // happy birthday to you.....

// function sum(){
//     return 2 + 4;
// }

// console.log(sum()); // 6


// function sumTwoNumber(num1, num2){
//     return num1 + num2;
// }

// const result = sumTwoNumber(4, 5);
// console.log(result); // 9

// console.log(sumTwoNumber(4, 5)); // 9


// function isEven(number){
//     // if(number % 2 === 0){
//     //     return true;
//     // }
//     // return false;

//     return number % 2 === 0;
// }

// console.log(isEven(5)); //false


// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("abc")); //a


function findTarget(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }

    return -1;
}

const myArray = [1, 3, 8, 9];
const ans = findTarget(myArray, 8);

console.log(ans); // 2 (index)

// function expression

const singHappyBirthday = function(){
    console.log("happy birthday to you.....")
}

singHappyBirthday(); // happy birthday to you.....