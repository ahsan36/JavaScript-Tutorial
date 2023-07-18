// get element by id

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);


// select element using query selector

// const mainHeading = document.querySelector("#main-heading");

// const header = document.querySelector(".header");
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);


// change text
// textContent and innerText

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);

// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);


// change the style of element

// const mainHeading = document.querySelector("div.headline h2");
// // console.log(mainHeading.style);

// mainHeading.style.color = "blue";


// get and set attributes

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://www.google.com");
// console.log(link.getAttribute("href"));


//get multiple elements using getElements by class name

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);


//get multiple elements using querySelectorAll by class name

// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);


//loop

// const navItems = document.getElementsByTagName("a");

// const navItems = document.querySelectorAll("a");
//for loop
// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];

//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

//for of loop

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }



// innerHTML

// const headline = document.querySelector(".headline");

// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class = \"btn\"> Learn More </button>";