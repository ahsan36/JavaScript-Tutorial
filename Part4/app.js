import { firstName } from "./fname.js";
import { age } from "./age.js";
import { Person } from "./person.js";

console.log(firstName, age);

const person = new Person("Ahsan", "Ansari", 22);
person.info();
console.log(person);