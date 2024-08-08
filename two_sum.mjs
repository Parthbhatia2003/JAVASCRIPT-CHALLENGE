export function sum(a,b){
    return a+b;
}


export const person = {
    name: 'Jane Doe',
    age: 28,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    haveBirthday() {
        this.age += 1;
        console.log(`It's my birthday! I am now ${this.age} years old.`);
    }
};


export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}


export default function crack(){
    console.log('hello world!');
}

export const PI = 3.14159;

export function calculateCircleArea(radius) {
    return PI * radius * radius;
}
