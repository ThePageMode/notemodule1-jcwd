//membuat object kosong
const obj = {};
const obj2 = new Object();

if (obj){
    console.log("truthy");
}

const user = {
    // properties
    firstName: "Elias",
    lastName: "Ronnenfelt",
    "Full Name": "Elias Bender Ronnenfelt",
    isAlive: true,
    age: 32,
    nickname: ["babe", "eli"], 
    family: {
        adek: "Sansan",
        kakak: "Inov",
    },
    

    //methods
    shout: () => {
        return "HEY";
    },
    greet: function() {
        return "halo";
    },
    greet() {
        return "halo";
    }
};

//cara memanggil property dalam object
console.log(user.firstName);
console.log(user.shout());
console.log(user.greet());

console.log(user["firstName"]);
console.log(user["shout"]());
console.log(user["Full Name"]);
const key = "lastName";
console.log(user[key]);
console.log(user.family.kakak);
console.log(user.nickname);


//untuk set property object
console.log(user.firstName);
user.firstName = "Anida";
console.log(user.firstName);
console.log(user.id);
user.id = 1;
console.log(user.id);

//delete property
console.log(user.family);
console.log(user.family.kakak)
delete user.family;

//optional "?." chaining
console.log(user.family);
console.log(user.family?.adek);
delete user["Full Name"];
console.log(user["Full Name"]);

//object.keys + loop object data
console.log(Object.keys(user));
for (let key of Object.keys(user)) {
    const value = user[key];
    console.log(key)
    console.log((value));;
}

//object entries
for (let [key, value] of Object.entries(user)) {
    console.log(key);
    console.log(value);
}

//for..in loop
for (let key in user) {
    const value = user[key];
    console.log(key);
    console.log(value);

}


// setter / getter properties
const newUser = {
    firstName: "jaka",
    lastName: "tarub",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const arrName = value.split(" ");
        this.firstName = arrName[0];
        this.lastName = arrName[arrName.length - 1];
    },
}

console.log(newUser);
console.log(newUser.fullName);
newUser.fullName = "si pitung pahlawan";
console.log(newUser.fullName);
console.log(newUser);

//this
function getMyTipe() {
    return `${this.tipe} makan berak`;
}

const ikan = {
    tipe: "lele",
    isKenyang: false,
    //this tidak bisa dipakai di arrow function
    // makan: () => {
    //      return this;
    // }
    makan() {
        if (this.isKenyang) {
            return "belum lapar"
        }
        console.log("kasih makan");
        this.isKenyang = true;
        return "kasih makan"
    }
}

console.log(ikan.makan());
console.log(ikan);
console.log(ikan.makan());


//built-in method Object
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

Object.assign(target, source);

console.log(target);
const abc = Object.assign({}, target);
//const abc = target;
abc.a = 15;
console.log(abc);
console.log(target);

//reference type dan cara copy data
const target2 = Object.assign({}, target);
target2.a = "1";
console.log(target2);
console.log(target);

const list = ["1", "2", "3"];
const list2 = list.slice()
list2[1] = "5";;
list2.push("4");
console.log(list);
console.log(list2);

//destructure syntax
const listName = ["jaka", "tarub", "pattimura"];
//const name1 = listName[0];
//const name2 = listName[1];
//const name3 = listName[2];
const [name1, name2, name3] = listName;
console.log(name1, name2, name3);


const pegawai = {
    nama: "jaka",
    umur: 20,
    list: "rajin dan tekun"
};
// const nama = pegawai.nama;
// const umur = pegawai.umur;
// const listPegawai = pegawai.list;
const {nama, umur, list: listPegawai} = pegawai;
console.log(nama, umur, listPegawai);

//spread operator
const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const merged = [...dataOne, 69, 420, ...dataTwo];
console.log(merged);

const sum = (number1, number2) => {
return number1 + number2
}
console.log(
    sum(...dataOne),
    sum(...dataTwo)
);

const object1 = {
    name: "jokowi",
    age: 666
}
const object2 = {
    email: "tigaperiode@gmail.com",
    age: 23
}
const mergedObject = {...object1, ...object2}
console.log(mergedObject);