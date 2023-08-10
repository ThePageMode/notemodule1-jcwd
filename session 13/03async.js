console.log("task 1");
setTimeout(runTask2, 5000);
//penulisan lain
// setTimeout(() => console.log("task2"), 5000)
console.log("task 3");

function runTask2() {
    console.log("task 2");
}


