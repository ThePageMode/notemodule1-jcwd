//01
//multiplication table
const input = 5;
const limit = 10;

for (let i = 1; i <= limit; i++) {
    console.log(`${input} x ${i} = ${input*i}`)
}

//02
//palindrome
const word = "wawaw";
const index = 1;
console.log(word[index]);
console.log(word[word.length - 1 - index]);

const middle = Math.floor(word.length / 2);
console.log(middle)

let isPalindrome = true;

for (let i = 0; i < middle; i++ ) {
    const sisiKiri = word[i];
    const sisiKanan = word[word.length - 1 - i];
    console.log(sisiKiri)
    console.log(sisiKanan)

    if (sisiKiri !== sisiKanan) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

if (isPalindrome) {
    console.log (`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`)
}
   

//03
//cm to km 
const num = 5;
console.log(`${num}cm / ${100000} = ${num/100000}km`);


//04
//add currency
const curr = 50000;
const currStr = curr + "";
let result = "";

for(let i = 0; i < currStr.length; i++) {
    const nLast = currStr.length - 1;
    const nLastI = nLast - i;
    console.log(nLastI);
    const now = currStr[nLastI];
    console.log(now);

    if (i % 3 === 0 && i !==0 ) {
        result = now + "." + result;
    } else {
        result = now + result;
    }
}

console.log(result)
console.log(`RP ${result},00`)



//05
//remove first occurence
const text = "Hello Meong";
const search = "ello";
const removed = text.replace(search, "");
console.log(removed);



//06 
//capitalize first letter
const caps = "ayam goreng"
let hasil = caps[0].toUpperCase();

for (let i = 1; i < caps.length; i++) {
    if (hasil [i-1] == " ") {
        console.log(caps[i])
        hasil = hasil + caps[i].toUpperCase();
    } else {
        hasil = hasil + caps[i];
    }
}
console.log(hasil)


//07
let reversed = "balik"
let reversed2 = ""
for (let i = reversed.length-1; i >= 0 ;i--) {
    console.log(i);
    console.log(reversed[i])
    reversed2 += reversed[i];
}
    
    console.log(reversed2)

//08

const ror = "EtA bErBaGi BeRcErItA"
let abo = "";
for (let i = 0; i < ror.length; i++) {
    const capital = ror[i].toUpperCase();
if (capital === ror[i]) {
    abo += ror[i].toLowerCase();
} else {
    abo += ror[i].toUpperCase();
    }
}
console.log(abo)


//09



//10



//11

//12
let wrd = "Makan Ayam Bakar Bangsat";
console.log(wrd[0]);
let wrd2 = "";
console.log(wrd)

for (let i = 0; i < wrd.length; i++) {
    if (wrd[i] === "a") {
        wrd2 = wrd2 + "*";
    } else {
        wrd2 += wrd[i];
    }
}
console.log(wrd2)



