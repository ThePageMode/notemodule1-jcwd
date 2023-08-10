//functions sequence
let result;

function greet(str) {
    result = str;
}

//bikin function hello 
function hello() {
    greet('hello');
}

//bikin arigatou setelah hello
function arigatou() {
    greet('arigatou');
}

//tapi still executed in the sequence they are called
arigatou();
hello();
console.log(result); //ini bakal tetep hello