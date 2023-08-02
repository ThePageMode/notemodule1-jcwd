//01
function areObjectsEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }
  
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      if (!areObjectsEqual(value1, value2)) {
        return false;
      }
    }
  
    return true;
  }
  

const obj1 = {
    a: "3",
    b: "3",
    c: "2",
    d: "7"
}

const obj2 = {
    a: "3",
    b: "3",
    c: "2",
    d: "1"
}

console.log(areObjectsEqual(obj1, obj2));


//02
function findIntersection(input1, input2) {
  const intersectionObj = {};
  for (const key in input1) {
    if ((key && input1[key] === input2[key])) {
      intersectionObj[key] = input1[key];

      return intersectionObj;
    }
  }
}
 
const a = {a: 1, b: 2};

const b = {a: 1, c: 3};


const intersectionResult = findIntersection(a,b);
console.log(intersectionResult);



//03
function mergeArrayRemoveDuplicate(list1, list2) {
  const hasil = [];

  function checkExist(student) {
    for (let cr of hasil) {
      if (student.name === cr.name && student.email === cr.email) {
        return true;
      }
    }
 
    return false;
  }

for (let student of list1) {
  let isExist = checkExist(student);
  if (!isExist) {
    hasil.push(student);
  }
}
for (let student of list2) {
  let isExist = checkExist(student);
  if (!isExist) {
    hasil.push(student);
  }
}

return hasil;
}


const listname1 = [
  {name: 'inof', email: 'akipovabodrova@meong.com'},
  {name: 'samsam', email: 'sansankeren@meong.com'}
]
const listname2 = [
  {name: 'inof', email: 'akipovabodrova@meong.com'},
  {name: 'pingkom', email: 'serpicobaik@meong.com'}
]

console.log(mergeArrayRemoveDuplicate(listname1, listname2));


//04
function reverseObjects(listObject) {
  const result = [];

  for (let obj of listObject) {
    console.log(obj);

    const newObj = {}
    for (let key in obj) {
      const value = String(obj[key]);
      newObj[value] = key;

    }

    result.push(newObj);
  }

  return result;
}

const listdata = [
  {name: "Wolo", age: 32},
];
console.log(reverseObjects(listdata));


//05
function getFactorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * getFactorial(n-1);


}
console.log(getFactorial(5)); 