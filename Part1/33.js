// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Ahsan", "Ankit", 5);
// console.log(person1.fullName());
console.log(person1.fullName); // Ahsan Ankit
person1.fullName = "Mayank Kumar";
console.log(person1); // Person { firstName: 'Mayank', lastName: 'Kumar', age: 5 }