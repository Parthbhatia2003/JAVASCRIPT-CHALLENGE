//ACTIVITY 1

for (let index = 1; index < 10; index++) {
    console.log(index);
}
for (let index = 1; index < 11; index++) {
    console.log(5*index);
}

//ACTIVITY 2
let n=1;
let sum=0;
while (n<11) {
    sum+=n;
    n++;
}
console.log(sum);

n=11
while (n--) {
    console.log(n);
}

//ACTIVITY 3

n=1;
do {
    console.log(n);
    n++;
    
} while (n<6);

let a=1;
let res=1;

do {
    res*=a;
    a++;
} while (a<6);
console.log(res);

//ACTIVITY 4

for (let i = 1; i < 6; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '* ';
    }
    console.log(line); // Trim to remove extra space and print the line
}

//ACTIVITY 5

for (let i = 0; i < 11; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 11; i++) {
    if(i==7){
        break;
    }
    console.log(i);
}