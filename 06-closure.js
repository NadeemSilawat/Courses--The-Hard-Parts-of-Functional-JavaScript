

// //////// Closure //////// //

// -- Reminding ourselves of how functions actually work

// const multiplyBy2 = inputNumber => inputNumber * 2;

// const output = multiplyBy2(7)
// const newOutput = multiplyBy2(3)



// -----------------------------------------------------------

// -- Let's call (run) our generated function with the input 3

// const functionCreated =  () => {
//     let counter = 0;
//     const add3 = (num) => {
//         const result = num + 3;
//         console.log(result)
//         return result;
//     }
//     return add3;
// }

// const generatedFunc = functionCreated();
// const result = generatedFunc(2); // 5



// //////// Inner function //////// //

//  Calling a function inside the function call in which it was defined -- //

// const outer = () => {
//     let counter = 0; 
//     const incrementCounter = () => {
//         counter ++;
//     }
//     incrementCounter();
// }
// console.log(outer());


/*  What determines what data your function have access to
      when you call the function ? where we call it ? -- */





// //////// Outer Function //////// //

/*  Now we can call the function that was originally saved as
      incrementCounter by its new global label newFunction -- */

const outer = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter++;
    }
    incrementCounter();
}
const newFunction = outer();

newFunction();
newFunction();

//  But we have a problem 