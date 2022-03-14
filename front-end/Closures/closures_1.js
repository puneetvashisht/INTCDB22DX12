// Lexical Scoping:

// Lexical scoping defines the scope of a variable by the 
// position of that variable declared in the source code. 



// Closures
// Example-1:-

// let name = 'John';

// function greeting() { 
//     let message = 'Hi';
//     console.log(message + ' '+ name);
// }

// greeting();




// Example-2:-

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {           // This is a Closure Function 
//        console.log(message);     // which assigns a new reference to the 'message' 
//                                     // variable and remembers the value 'Hi'.   
//     }

//     sayHi();
// }

// greeting();






// Example 3:-

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     return sayHi;
// }
// let hi = greeting();
// hi(); // still can access the message variable.







// More Practical Example of Closures..

// function greeting(message) {
//     return function(name){
//          return message + ' ' + name;
//     }
//  }


//  let sayHi = greeting('Hi');
//  console.log(sayHi('John')); // Hi John

//  let sayHello = greeting('Hello');
//  console.log(sayHello('John')); // Hello John

 
 
// Problem
// for(var index = 1; index<=3; index++){
//     setTimeout(function(){
//         console.log('after ' + index + ' second(s)' + index);
//     }, index * 1000);
// }



// Solution 1 ->> Using IIFE. (immediately invoked function expresion)

// for(var index = 1; index<=3; index++){

//     (function(index){
//     setTimeout(function(){
//         console.log('after ' + index + ' second(s)' + index);
//     }, index * 1000);
//     })(index);
// }


// Solution 2 ==> Using 'let' keyword

for(let index = 1; index<=3; index++){
        setTimeout(function(){
            console.log('after ' + index + ' second(s)' + index);
        }, index * 1000);
}