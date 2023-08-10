//define class
const Userr = class {};

class User {
    nama;
    umur = 20;
    hobi = "ngemper";
    #password

    constructor(nama, umur, hobi) {
        this.nama = nama;
        this.umur = umur ? umur: this.umur;
        this.hobi = hobi || this.hobi;

        this.#password = nama + "maru"
    }



    greeting() {
        return `hello ${this.nama}`;
    }

    getPassword() {
        return this.#password;
    }
}


const user1 = new User("Olom", 31, "Bombo");
console.log(user1.nama);
console.log(user1.umur);
console.log(user1.hobi);
console.log(user1.greeting());

const user2 = new User("Umpru");
console.log(user2.nama);
console.log(user2.umur);
console.log(user2.hobi);
console.log(user2.greeting());

