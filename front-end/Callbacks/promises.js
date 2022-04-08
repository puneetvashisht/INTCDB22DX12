
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
function foo(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('function foo');
            reject("failure")
        }, 5000)
    })
}

// let result = foo();
// console.log(result);

foo()
.then(result => console.log(result))
.catch(err=> console.log('Err:' ,err))

console.log('finishing...')