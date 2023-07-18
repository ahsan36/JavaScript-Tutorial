// Arrow function

const singHappyBirthday = () => {
    console.log("happy birthday to you.....")
}

singHappyBirthday();



const sumTwoNumber = (num1, num2) => {
    return num1 + num2;
}

console.log(sumTwoNumber(5, 6));



const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }

    return -1;
}

const myArray = [1, 3, 8, 9];
const ans = findTarget(myArray, 8);

console.log(ans);