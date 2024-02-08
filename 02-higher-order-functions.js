

// /////////////// The Problem: Repetitive ////////////// //

/* We could generalize our function so that we pass in our
      specific instruction only when we run the copyArrayAndManipulate function! -- */

// const copyArrayAndManipulate = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }

// const multiplyBy2 = (input) => {
//     return input * 2;
// }
// const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// // console.log(copyArrayAndManipulate([1,2,3], multiplyBy2));






// ////////////////  Arrow & Anoymous functions  /////////////// //

//  Arrow function in ES2015

// const multiplyBy2 = (input) => { return input * 2 };

/* - So where the function is a single expression to evaluate and then return,
     ES2015 lets us remove the {} and return keyword - */

// const multiplyBy2 = ( input ) => input * 2;
// const output = multiplyBy2(3);

/* - We can even remove the parenthesis if there's only 1 parameter (expected input) */

// const multiplyBy2 = input => input *2;

// const output = multiplyBy2(3);

// console.log(output)




// -------------------------------------------------------------------------------------

// -- Let's use our shortned version of our callback function multiplyBy2

// const copyArrayAndManipulate = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }

// const multiplyBy2 = input => input * 2;

// const result = copyArrayAndManipulate([1,2,3], multiplyBy2);




/*********************************************************** */

// We can even insert our callback function 'multiplyBy2' directly('anonymously')

// const copyArrayAndManipulate = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }

// const result = copyArrayAndManipulate([1, 2, 3], input => input * 2);
