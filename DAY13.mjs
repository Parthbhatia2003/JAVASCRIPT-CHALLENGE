//ACTIVITY 1
import { sum } from "./two_sum.mjs";

console.log(sum(5,3));


import { person } from "./two_sum.mjs";


console.log(person.name);
console.log(person.greet());
console.log(person.haveBirthday());


//ACTIVITY 2

import { add, subtract, multiply, divide } from './two_sum.mjs';

const a = 10;
const b = 5;

console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${subtract(a, b)}`);
console.log(`Multiplication: ${multiply(a, b)}`);
console.log(`Division: ${divide(a, b)}`);

import cracky from "./two_sum.mjs";

cracky();

//ACTIVITY 3

import * as utils from './two_sum.mjs';

console.log(`this is ${utils.PI}`);

console.log(`Area is ${utils.calculateCircleArea(10)}`);

//ACTIVITY 4


// Import the specific Lodash function using ES6 import syntax
import lodash from 'lodash';
const { uniq } = lodash;

// Example: Use lodash to get unique values from an array
const numbers = [1, 2, 3, 4, 4, 5, 5, 6];

// Use lodash's uniq function to remove duplicate values
const uniqueNumbers = uniq(numbers);

console.log('Unique Numbers:', uniqueNumbers);

import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios(url)
.then((response)=>{
    console.log('Response data:',response.data);
})
.catch((error)=>{
    console.log('Error message',error);
    
})

