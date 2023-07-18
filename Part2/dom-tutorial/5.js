// const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//     });
// })



// const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget);
//     })
// }


// behind the scene

// console.log("script start !!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i;
// }

// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")


// little practice with click event
const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length)

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.style.background = "yellow";
        e.target.style.color = "#333";
    })
})