//01
//convert cesius to fahrenheit
const celcius = 30;
const fahrenheit = celcius * 1.8 + 32;
console.log(`${celcius} C = ${fahrenheit} F`)

//02
//write a code to check whether the number is odd or even
const numberToCheck = 23; 
if (numberToCheck % 2 === 0) {
    console.log(`${numberToCheck} is even`);
} else {
    console.log(`${numberToCheck} is odd`);
}

//03
//write a code to check whether the number is prime number or not
const num = 23;
let isPrime = true;

for (let x=2; x < num; x++) {
    if (num % x === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "number is prime" : "number is not prime");

//04
//write a code to find the sum of the numbers 1 to N
//i = 1
//n = 5
//sum = 0
const n = 5;
let sum = 0;
for (let i = 1; i <=n; i++) {
    sum += i;
    //ini sama aja kayak sum = sum + i
}
console.log(`sum number is  ${sum}`);

//05
//write a code to find factorial of a number
const fact = 5;
let hasil = 1;
/*  ngitung faktorial dimulai dari 1 karena kalo mulai dari 0 kayak bilangan
nanti hasilnya 0 semua, kan dikali~~~ */
for (let i = 1; i <=fact; i++) {
    hasil *= i;
}
console.log(`factorial number is ${hasil}`);

//06
//print the first N Fibonacci number
const N = 7;
let n1 = 1;
let n2 = 1;
let fibN;

for (let i = 1; i <= N; i++) {
    console.log(n1);
    fibN = n1;
    const next = n1 + n2;
    n1 = n2;
    n2 = next;
}
console.log(fibN)
