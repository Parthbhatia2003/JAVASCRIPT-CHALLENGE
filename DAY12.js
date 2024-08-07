//ACTIVITY 1
function throwErrorFunction() {
    throw new Error("This is an intentional error");
}

function handleErrors() {
    try {
        throwErrorFunction();
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}

handleErrors();

function divide( a, b){
   if(b==0){
    throw new Error("Denominator is zero")
   }
   else{
    console.log(a/b);
   }
}

function ans(){
    try{
        divide(5,0);
    }
    catch(error){
        console.error("An error occurred: ", error.message);
    }
}
ans();

//ACTIVITY 2

function demonstrateTryCatchFinally() {
    try {
        console.log("Entering try block");
        // Intentionally throwing an error
        throw new Error("This is an intentional error");
        console.log("This line will not be executed");
    } catch (error) {
        console.log("Entering catch block");
        console.error("Caught an error: ", error.message);
    } finally {
        console.log("Entering finally block");
    }
    console.log("Execution continues after try-catch-finally");
}

demonstrateTryCatchFinally();

//ACTIVITY 3

// Define a custom error class that extends the built-in Error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class (Error) constructor
        this.name = 'CustomError'; // Set the error name to CustomError
    }
}

// Function that throws an instance of the custom error
function throwCustomError() {
    throw new CustomError("This is a custom error message");
}

// Function to demonstrate handling the custom error using try-catch block
function handleCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        
            console.error("Caught a custom error: ", error.message);
        
    }
}

// Run the function to see the custom error handling in action
handleCustomError();


// Define a custom error class that extends the built-in Error class
class ValidationError extends Error {
    constructor(message) {
        super(message); // Call the parent class (Error) constructor
        this.name = 'ValidationError'; // Set the error name to ValidationError
    }
}

// Function that validates user input
function validateUserInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError("Invalid input: Input must be a non-empty string.");
    }
    // Additional validation logic can be added here
    return true;
}

// Function to demonstrate handling the custom error using try-catch block
function handleUserInput(input) {
    try {
        const isValid = validateUserInput(input);
        console.log("User input is valid:", isValid);
    } catch (error) {
    
            console.error("Validation error: ", error.message);
        
    }
}

// Test the function with invalid input
handleUserInput("");  // This will trigger the custom validation error

// Test the function with valid input
handleUserInput("Valid input");  // This will pass the validation


//ACTIVITY 4


let promise =new Promise((resolve,reject)=>{
   let num=Math.floor(Math.random()*10);

   if(num<5){
    resolve("PASSED!")
   }
   else{
    reject("Error");
   }
 })

 promise.then((message)=>{
    console.log(message);
    
 }).catch((error)=>{
  console.log(error);
 });

 // Function that returns a promise which randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve("Promise resolved successfully");
            } else {
                reject(new Error("Promise rejected with an error"));
            }
        }, 1000);
    });
}

// Async function to handle the promise with try-catch block
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log("Result:", result);
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

// Run the async function to see the error handling in action
handleRandomPromise();

// ACTIVITY 5
// Function to fetch data from an invalid URL
function fetchData() {
    const invalidUrl = 'https://invalid.url/endpoint';

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data:", data);
        })
        .catch(error => {
            console.error("Caught an error:", error.message);
        });
}

// Run the function to see error handling in action
fetchData();


async function fetchdata(){
  try {
      const invalidUrl = 'https://invalid.url/endpoint';
  
      let response = await fetch(invalidUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

fetchdata();