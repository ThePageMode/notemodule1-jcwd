class Product {
    constructor() {
        this.productName = "sidu"
        this.price = 5000;
    }
}

class Book extends Product {
    constructor() {
        super();
        this.authorName;
    }

    setAuthorName(name) {
        this.authorName = name;
    }
}

const book1 = new Book();
console.log(book1.productName);
console.log(book1.price);
book1.productName = "The Sluts";
book1.price = 75000;
book1.setAuthorName("Jojon");

console.log(book1.productName);
console.log(book1.price);
console.log(book1.authorName);


//check type class yang dipakai
class Animal {}
class Rabbit extends Animal {}
class Sheep extends Animal {}
class Tree {}

const rambo = new Rabbit();
const shaun = new Sheep();
console.log(rambo instanceof Rabbit);
console.log(rambo instanceof Animal);
console.log(rambo instanceof Sheep);
console.log(shaun instanceof Rabbit);

