//ACTIVITY 1
const array = [1, 2, 3, 4, 5];

// Printing elements in a single line using a for loop
for (let index = 0; index < array.length; index++) {
    process.stdout.write(array[index] + ' ');
}
console.log(); // For a newline after the loop

console.log(array[0], array[4]);

//ACTIVITY 2
array.push(10);

// Printing elements in a single line using forEach
array.forEach(element => {
    process.stdout.write(element + ' ');
});
console.log(); // For a newline after the loop

array.pop();
array.forEach(element => {
    process.stdout.write(element + ' ');
});
console.log(); // For a newline after the loop

array.shift();
array.forEach(element => {
    process.stdout.write(element + ' ');
});
console.log(); // For a newline after the loop

array.unshift(1);
array.forEach(element => {
    process.stdout.write(element + ' ');
});
console.log(); // For a newline after the loop

//ACTIVITY 3

const arr=[];
array.map((element)=>{
arr.push(3*element);
})

arr.forEach(element => {
    process.stdout.write(element + ' ');
});
console.log(); // For a newline after the loop

const filterArray = arr.filter(num => num%2===0);

filterArray.forEach(element => {
    process.stdout.write(element + ' ');
});
console.log(); // For a newline after the loop

// Initial array
const array1 = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of the array
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Logging the sum of the array
console.log(sum);


//ACTIVITY 4 don->for loop and for each loop(have done before)

//ACTIVITY 5 done->creating 2d array and printing it and finding a specific element

const twodarray=[[1,2,3],[4,5,6]];
for (let index = 0; index < twodarray.length; index++) {
    for (let i = 0; i < twodarray[0].length; i++) {
        process.stdout.write(twodarray[index][i] + ' ');
    }
    console.log();
    
}