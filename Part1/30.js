const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('Ahsan', 'Mayank', 'abc@gmail.com', 22, "my address");
const user2 = createUser('Ankit', 'Tasif', 'xyz@gmail.com', 23, "address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());