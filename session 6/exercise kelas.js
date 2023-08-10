class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    
    }
}

class Transaction {
    #cart = [];
    #total = 0;
addToCart(product, qty) {
    if (!(product instanceof Product)) {
        return;
    }

    this.#total = this.#total + product.price * qty;
    this.#cart.push({
        product : product,
        qty: qty,
    });
}

getCart() {
    return this.#cart;
}
getTotal(){
    //format bikin duit
    const formatter = Intl.NumberFormat("id-ID");
    const formatted = formatter.format(this.#total);
    return `Rp ${formatted},00`
}

checkout(){
    const items = [];

    for (let item of this.#cart) {
        items.push({
            name: item.product.name,
            qty: item.qty,
            subTotal: item.product.price * item.qty
        });
        total += item.product.price * item.qty
    }

    return {total, items}
    }
}

const product1 = new Product("besi", 10000);
const product2 = new Product("kuda", 3500);
const product3 = new Product("pasta", 50000);
const product4 = new Product("sendal jepit", 3000);


const t1 = new Transaction();
t1.addToCart(product1, 5);
console.log(t1.getTotal());
t1.addToCart(product2, 4);
console.log(t1.getTotal());
t1.addToCart(product4, 2);
console.log(t1.getTotal());

const t2 = new Transaction();
t2.addToCart(product1, 2);
t2.addToCart(product2, 2);
t2.addToCart(product3, 4);

console.log(t1.getCart());

