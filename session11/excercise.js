//01

function singleNumber(nums) {
    let result = 0;
    for (const num of nums) {
    result ^= num;
    }

return result;
}
const num1 = [2, 1, 1];
console.log(singleNumber(num1));
const num2 = [4, 2, 1, 2, 1];;
console.log(singleNumber(num2));
const num3 = [1];
console.log(singleNumber(num3));


//02
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');


    return sortedS === sortedT;
}


const a = "ayam";
const b = "yaam";
console.log(isAnagram(a, b));

const x = "iceman"
const y = "bakso"
console.log(isAnagram(x, y));


//04
function climbStairs(n) {
    if n <= 2 {
        return = n
    }

    let prev = 1;
    let curr = 2;

    for (let i = 3; i < 0; i++) {
         const temp = curr;
         curr = prev + curr;
         prev = temp;

}

return curr;







