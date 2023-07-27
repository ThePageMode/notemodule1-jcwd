

//For number 1 and 2
const RectangleWidth = 10;
const RectangleLength = 20;

//01
//area of rectangle
const RectangleArea = RectangleWidth * RectangleLength;
console.log(RectangleArea);

//02
//perimeter of rectangle
const RectanglePerimeter = 2 * (RectangleWidth + RectangleLength);
console.log(RectanglePerimeter);

//03
const CircleRadius= 23;

//diameter of circle
const CircleDiameter = 2 * CircleRadius;
console.log(CircleDiameter)

//circumference of circle
const CircleCircum = 2 * 3.14 * CircleRadius;
console.log(CircleCircum)

//area of circle
const CircleArea = 3.14 * (CircleRadius ** 2)
console.log(CircleArea)

//04
//angles of triangles if two angles are given
//AngleOne + AngleTwo + AngleThree = 180
const AngleOne = 25;
const AngleTwo = 65;
const AngleThree = 180 - (AngleOne + AngleTwo);
console.log (AngleThree);

//05
//get difference between dates in days
const date1 = new Date("2001-11-09");
const date2 = new Date("2001-11-23");
const RangeMs = date2 - date1;
const p = 1000 * 60 * 60 * 24;
const rangeDays = RangeMs / p;
console.log(rangeDays);

//06
//convert days to years, months, and date
const hari = 666
//years
const years = Math.floor(hari / 365);
console.log(years)
//months
const month = Math.floor((hari % 365) / 30);
console.log(month);
//hari sisa
const days = hari % 365 % 30;
console.log(days)
//in full!!!
console.log(`${years} years, ${month} month, ${days} days`)



















