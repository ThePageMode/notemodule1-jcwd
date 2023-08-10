//for loop odd number
for (let i = 0; i <= 16; i +=2) {
    console.log(i);
}

//for loop even number
for (let i = 1; i <= 16; i +=2) {
    console.log(i);
}


//looping from 10 to back
for (let i = 10; i >= 0; i --) {
    console.log(i);
}

//while loop
let n = 0;
while(n < 10) {
    console.log(n);
    n++;
}

//do... while loop
let a = 1
do {
    console.log("hello");
    a++;
} while(a < 2);


for (let i = 0; i < 10; i++) {
    if (i === 5) {
       break;
    }
    console.log(i);
}
console.log(4 % 2)

//jumlah angka-angka ganjil kalau ditambah
let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        //angka ganjil semua
        console.log(i)
        continue
    }
    sum += i
    }
    console.log(sum)


    //find out how to define a factorial in number
    const numberOfFactorial = 4;
    let result = 1;

    // ini kalo pake for
    // for (let i = 2; i <= numberOfFactorial; i++) {
    //    result *=i
    // }

    //ini kalo pake while
    let i = 2;
    while(i <= numberOfFactorial) {
        result *= i;
        i++;
    }
    console.log(result)

