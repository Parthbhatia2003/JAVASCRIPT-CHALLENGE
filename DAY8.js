//ACTIVITY 1
var name = "Parth"
var age = 18;

console.log(`Hello my name is ${name} and my age is ${age}`);

const namee = "Virat";
const agee = 25;
const city = "New York";

console.log(`Hello my name is ${namee}.
My age is ${agee}.
My city is ${city}.`);

//ACTIVITY 2

let array=[1,2,3,4,5];

const [first,second]=array;

console.log(first);
console.log(second);

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };

const {title,author}=book

console.log(title);
console.log(author);

//ACTIVITY 3

const firstarray=[1,2,3,4,5];
const secondarray=[5,6,7,8,9,10];

const newarray=[...firstarray, ...secondarray]

console.log(newarray);
// console.log(...newarray);

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
    // return numbers
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result); // Output: 15
  

  //ACTIVITY 4

  const product=function(a,b=5){
       return a*b;
  }

  console.log(product(2,10));
  console.log(product(1));
  

//ACTIVITY 5  
const naame = "Alice";
const aage = 30;

const person = {
  naame, // Property shorthand
  aage,  // Property shorthand
  greet() { // Method shorthand
    return `Hello, my name is ${this.naame} and I am ${this.aage} years old.`;
  }
};

console.log(person);
console.log(person.greet());


const propName1 = "firstName";
const propName2 = "lastName";

const persoon = {
  [propName1]: "Alice", // Property name is dynamically set to "firstName"
  [propName2]: "Johnson" // Property name is dynamically set to "lastName"
};

console.log(persoon);

// console.log(propName1);


