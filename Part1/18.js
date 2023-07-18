// spread operator in objects

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = {
//     key3 : "value3",
//     key4 : "value4"
// }

// const newObject = {...obj1, ...obj2};

// console.log(newObject);

// objects inside array

const user = [
    {userId: 1, firstName: 'Ahsan'},
    {userId: 2, firstName: 'Ankit'},
    {userId: 3, firstName: 'mayank'}
]

// console.log(user);

// for(let users of user){
//     console.log(users);
// }

// nested destructuring

const [user1, user2, user3] = user;
console.log(user1);