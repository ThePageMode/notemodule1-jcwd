const jsonData = `{
    "employees": [
        {"firstName": "John", "lastName": "Doe"},
        {"firstName": "Jane", "lastName": "Doe"}
    ]
}`;

console.log(jsonData);
const objData = JSON.parse(jsonData);
objData.name = "data pegawai";
objData.employees.push({
    firstName: "Jaka",
    lastName: "Tarub",
});
console.log(objData);
const jsonData2 = JSON.stringify(objData);
console.log(jsonData2);

// array json
const arrJsonData = '["A", "B", "C", "D"]';
const arrData = JSON.parse(arrJsonData);
arrData.push("E");
console.log(arrData);
const arrJsonData2 = JSON.stringify(arrData);
console.log(arrJsonData2);