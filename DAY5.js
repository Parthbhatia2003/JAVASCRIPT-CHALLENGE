//ACTIVITY 1
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }
  
  // Example usage:
  console.log(isEvenOrOdd(4)); // Output: Even
  console.log(isEvenOrOdd(7)); // Output: Odd

  function squareNumber(number) {
    return number * number;
  }
  
  // Example usage:
  console.log(squareNumber(5)); // Output: 25
  console.log(squareNumber(10)); // Output: 100
    
 //ACTIVITY 2
 function findMax(num1, num2) {
    const max = num1 > num2 ? num1 : num2;
    console.log('The maximum number is:', max);
  }
  
  // Example usage:
  findMax(5, 10); // Output: The maximum number is: 10
  findMax(20, 15); // Output: The maximum number is: 20

  function concatenateStrings(string1, string2) {
    return string1 + string2;
  }
  
  // Example usage:
  console.log(concatenateStrings('Hello, ', 'World!')); // Output: Hello, World!
  console.log(concatenateStrings('Good ', 'Morning')); // Output: Good Morning

  
//ACTIVITY 3
const sum = (num1, num2) => num1 + num2;

// Example usage:
console.log(sum(5, 10)); // Output: 15
console.log(sum(20, 30)); // Output: 50


const containCharacter=(str,ch)=> str.includes(ch);

console.log(containCharacter('Hello, World!', 'H')); // Output: true
console.log(containCharacter('Hello, World!', 'z')); // Output: false

//ACTIVITY 4

const product=(num1,num2=2)=>num1*num2;

console.log(product(5));
console.log(product(5,9));

const greeting=(name,age=18)=>{
    console.log(`Hello ${name}, your age is ${age}`);
}

greeting("Parth");

//ACTIVITY 5
const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
      func();
    }
  };
  
  // Example usage:
  const sayHello = () => console.log('Hello!');
  
  repeatFunction(sayHello, 3);

  const applyfunctions=(func1,func2,value)=>func2(func1(value))

  const double=(x)=>x*2;
  const addfive=(x)=>x+=5;

  const result=applyfunctions(double,addfive,10);
  console.log(result);
  
  
