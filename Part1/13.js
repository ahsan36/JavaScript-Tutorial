let winningNumber = 19;
let userGuess = +prompt("Guess the number");// input from user in string

if(userGuess === winningNumber){
    console.log("Your guess is right");
}else{
    console.log("Your guess is wrong");    
}