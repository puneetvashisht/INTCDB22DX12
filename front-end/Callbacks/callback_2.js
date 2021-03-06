
// Synchronous Code / Blocking Code.
// console.log("First Execution")

// console.log("Second Execution")

// console.log("Third Execution")



// Asynchronous Code / Non-Blocking Code

// console.log("First Execution")

// setTimeout(() => console.log("Second Execution"), 3000)  // Time Consuming

// console.log("Third Execution")

// console.log("Fourth Execution")


console.log('starting...');

// non - blocking
function foo(fn){
    setTimeout(()=>{
        console.log(fn)
        console.log('function foo');
        fn("success")
    }, 5000)
}

// let result = foo();
// console.log(result);

foo((result)=> console.log(result))

console.log('finishing...')