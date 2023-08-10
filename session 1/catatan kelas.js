//munculin hello world di output nih
console.log("hello world");


/* ngedeclare variabel */
let message;
//isi messagenya
message = "hello world";

let message2 = "hello world";
//ini ganti isi variabel. cuma let yang bisa ganti
message2 = "hello jing";
console.log(message2)

const messageThree = "hai"
// contoh error::
// message3 = "oi";
//const message2 = "hello world"
console.log(messageThree);;


//mutable
let person = "jane"
let newperson = person
console.log (person)
newperson = "doe"
console.log (newperson)
console.log (person)






//string method
const title = "Art of Highschool Breakup";
const bigTitle = title.toUpperCase();
const titleLength = title.length;
console.log(bigTitle);


const firstName = "Elias";
const lastName = "Bender";

// const fullName = firstName + " " + lastName
const fullName = `${firstName} ${lastName}`;
console.log(fullName.toUpperCase().replace("ELIAS","ANIDA"))


const number = 4.2069;
const strNumber = number.toFixed();
console.log(strNumber);

const x = "3.5";
const numX = x * 1;
const intX = parseInt(x);
const floatX = parseFloat(x);
console.log(numX)
console.log(intX)
console.log(floatX)

console.log(Boolean(" "))
console.log(Boolean(""))
console.log(Boolean("0"))
console.log(Boolean("-1"))

const now = new Date();
console.log(now);
console.log(now.getTime());
const zeroDate = new Date(0);
console.log(zeroDate);
console.log(zeroDate.getTime());
const oneHourAfterZeroDate = new Date(1000 * 1 * 3600);
console.log(oneHourAfterZeroDate)

const AmertaKilat = new Date("2023-08-17 08:00");
AmertaKilat.setFullYear(2666);
console.log(AmertaKilat);
console.log(AmertaKilat.getDate());
console.log(AmertaKilat.getFullYear())
console.log(AmertaKilat.getHours());

console.log(182 + 44)
console.log("420" + "69");
console.log(66 - 6);
console.log(10 / 2);
console.log(16 % 5);
console.log(3 ** 3);
console.log("6" + "6" + '6')

console.log("1" + 1);


let n = 2;
n += 2;
//sama aja kayak n = n + 2
console.log(n)

let counter = 0;;
counter++
//sama kayak counter +=1;
console.log(counter)
counter--;
/* sama kayak counter -= 1;
atau
counter = counter - 1 */
console.log(counter);

//increment & decrement (nampiling yang ada dulu, makanya dari 0)
//sis i wish u understand this part the next time u see
//cuma bisa support number, gak bisa pake string
let incNum = 0;
incNum++;
console.log(counter++);
console.log(counter);

let txt = "hello";
txt = txt + "war";
console.log(txt);

console.log("1" == 1);
console.log("A" == "B");
console.log("A" == "A");
console.log("1" === 1);
console.log("1" != 1);

console.log(6 >= 6);
console.log(6 <= 6);

const num1 = 3;
const num2 = 3;
console.log(num1 >= num2);
console.log(1 <= 1);

// find length and width of rectangle
// const length = 20;
// const width = 10;

// calculate rectangle area
// const area = length * width;

// output result to user
// console.log
