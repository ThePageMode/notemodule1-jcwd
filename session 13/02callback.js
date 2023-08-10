

//01 buat 2 fungsi berbeda
function calculator(a, b) {
    return a + b;
}

function displayer(something) {
    console.log(something);
}

const res = calculator(1, 2);
displayer(res);


//02fungsi pertama mengeksekusi fungsi lain (hard-coded)
function newCalculator(a, b) {
    const res = a + b;
    displayer(res);
}

//03 adding callback parameter
function betterCalculator(a, b, callback) {
    const res = a + b;
    callback(res);
}

function storeResult(something) {
    //...simpan something ke file
}

betterCalculator(10, 5, displayer);
betterCalculator(20, 5, storeResult);
betterCalculator(20, 5, (res) => {
    console.log(`hasil kalkulasi adalah: ${res}`);
})