// objects

//array are good but not sufficient
//for real world data

//objects store key value pairs
//objects don't have index

//how to create objects

// const person =  {
//     name:"Ahsan",
//     age:22
// };

// const person =  {
//     name: "Ahsan",
//     age: 22,
//     hobbies: ["guitar", "sleeping"]
// };

// console.log(person);

//how to access data from objects

// console.log(person["name"]); // Ahsan
// console.log(person.name); // Ahsan

// console.log(person.hobbies);

//how to add key value pair to objects

// person.gender = "male";

// console.log(person); //{name: 'Ahsan', age: 22, hobbies: Array(2), gender: 'male'}

// how to iterate object

const person =  {
    name: "Ahsan",
    age: 22,
    hobbies: ["guitar", "sleeping"]
};

// for in loop

// for(let key in person){
//     // console.log(key); // name age hobbies

//     // console.log(person[key]); Ahsan 22 [ 'guitar', 'sleeping' ]


//     console.log(`${key} : ${person[key]}`); name : Ahsan age : 22 hobbies : guitar,sleeping
// }

// Object.keys

// console.log(Object.keys(person)); [ 'name', 'age', 'hobbies' ]

// for of loop

for(let key of Object.keys(person)){
    console.log(person[key]); // Ahsan 22 [ 'guitar', 'sleeping' ]
}