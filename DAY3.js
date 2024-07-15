//ACTIVITY 1
let a = 18;
if (a > 0) {
    console.log('Number is postive');
}
else if (a < 0) {
    console.log('Number is negative');
}
else {
    console.log('Number is Zero');
}

if (a >= 18) {
    console.log('Eligible for voting');
}
else {
    console.log('Not Eligible for voting');
}
//ACTIVITY 2
let x = 1, y = 2, z = 3;
if (x > y && x > z) {
    console.log('x is largest ', x)
}
else if (y > x && y > z) {
    console.log('y is largest ', y)
}
else {
    console.log('z is largest ', z)
}
//ACTIVITY 3
let dayNumber=4;
let day;
switch (dayNumber) {
    case 1:
        day = 'Sunday';
        break;
    case 2:
        day = 'Monday';
        break;
    case 3:
        day = 'Tuesday';
        break;
    case 4:
        day = 'Wednesday';
        break;
    case 5:
        day = 'Thursday';
        break;
    case 6:
        day = 'Friday';
        break;
    case 7:
        day = 'Saturday';
        break;
    default:
        day = 'Invalid day number';
}
console.log(day);

let grade;
let score =99;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(grade);

//ACTIVITY 4

 a=6;
console.log(`The number is ${a%2==0?`even`:`odd`}`);

//ACTIVITY 5

let year=2028
console.log((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)));
