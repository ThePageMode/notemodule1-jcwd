//HALAMAN 1
//01
const arr = [23, 7, 8, 69, 12, 13];
function LowHighAve(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr)
    const lowest = sortedArr[0];
    const highest = sortedArr[sortedArr.length - 1];
    const average = sortedArr.reduce((sum, num) => sum + num, 0) / sortedArr.length;
    return { lowest, highest, average };
  }
  const { lowest, highest, average } = LowHighAve(arr);
  console.log(`Lowest: ${lowest}, Highest: ${highest}, Average: ${average}`);


 
//02
//cara beres
/*
function concatWords(arrWords) {
    let result = " ";
    for (let i = 0; i <arrWords.length; i++) {
        const word = arrwords[i];

        if (i === arrWords.length - 1) {
            result += "and";
        } else if (i !== 0) {
    } result += ","
}
result += word;
}
*/

function ConcatWords(words) {
if (words.length === 0){
    return ''; 
} else if (arr.length === 1) {
    return words[0]
} else {
    const lastWord = words.pop();
    const ConcatWords = words.join();
    return `${ConcatWords}, and ${lastWord}`;
    }
}

const WordList = ["martabak", " pisang", " durian", "kuda lumping"];
const result = ConcatWords(WordList);
console.log(result);



//03
function SplitSentence(name) {
    const wordsArray = name.split(" ");
    return wordsArray
}

const inputString = "Pengen Makan Ayam Penyet"
const wordsArray = SplitSentence(inputString)
console.log(wordsArray);


//04
function NumberSum(num1, num2) {
    let hasil = [];
    for (let i = 0; i < num1.length; i++){
        hasil.push((num1[i]) + (num2[i]));
    
    return hasil;
    }
}

const input1 = [1, 2, 3];
const input2 = [3, 2, 1];
console.log(NumberSum(input1, input2));



//05
function addUnique(existingArr, newItem) {
//cara manual
    let allowed = true;
    for (let item of existingArr) {
        if (item === newItem) {
            allowed = false;
            break;
        }
    }

    if (allowed) {
        existingArr.push(newItem);;
    }


//pake built-in
// if (!existingArr.includes(newItem)) {
// existingArr.push(newItem);
//}

return existingArr;
}

const input = ["gula", "garam", "minyak"];
console.log(addUnique(input, "kornet"));


//HALAMAN 2
//01
function RemoveOddNumbers(arrNumber) {
    EvenNumbers = (arrNumber.filter(num => num % 2 === 0));
    return EvenNumbers;
}

//cara rekomendasi
//for (let number of arrNumber) {
//   if (num & 2 === 0) {
//   result.push(num)
// }

const rslt = RemoveOddNumbers([2, 7, 8, 19, 20, 7, 16, 70])
console.log(rslt);


//02

function limitArray(maxSize, ...item) {
   const resultArray = [];
    for (let i = 0; i < maxSize; i++) {
    resultArray.push(item[i]); 
}
return resultArray;
    }

console.log(limitArray(4, 7, 9, 10, 17, 28, 59));


//03
const arr1 = ["kijang", "bakso", "ikan"];
const arr2 = ["kodok", "bekicot", "bangsat"];

function CombineArray(group1, group2) {
    return arr1.concat(arr2)
}
console.log(CombineArray(arr1, arr2));


//04
function findDuplicateValue(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i+i) && !result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

const data = ["udang", "kambing", "sapi", "udang", "bekicot", "pecel", "sapi"];
console.log(findDuplicateValue(data));


//05
function findDifference(list1, list2) {
    const result1 = [];
    for (let i = 0; i < list1.length; i++) {
        if (list1[i], list2[i]) {
            result1.push(list1[i], list2[i]);
        }
    }
    return result1;
}

const list1 = ["kucing", "ayam", "babi"];;
const list2 = ["kucing", "monyet", "babi"];
console.log(findDifference(list1, list2));



















