// call apply bind

// const user1 = {
//     firstName : "Ahsan",
//     age : 22,

//     about : function(){
//         console.log(this.firstName, this.age);
//     }
// }

// const user2 = {
//     firstName : "Ankit",
//     age : 23,
// }

// user1.about.call(user2); // Ankit 23




function about(hobby,favMusic){
    console.log(this.firstName, this.age, hobby,favMusic);
}

const user1 = {
    firstName : "Ahsan",
    age : 22,
}

const user2 = {
    firstName : "Ankit",
    age : 23,
}

// apply
// about.apply(user2, ["guitar", "bach"]); // Ankit 23 guitar bach

//bind

const func = about.bind(user2, "guitar", "bach");
func(); // Ankit 23 guitar bach