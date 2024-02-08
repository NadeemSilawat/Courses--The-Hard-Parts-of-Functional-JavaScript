

// /////////////// Map ////////////// //

//   Devlopers tend to callArrayAndManipulate, Map

//  const map = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }

// const multiplyBy2 = input => input * 2;

// const result = map([1,2,3], multiplyBy2);

// - Let's diagram it in a different way and talk about the purpose of diagramming - //





// ////////// Reduce Example /////////////// //

/*This function is known as reduce - it can handle a 
remarkable rang of tasks -- */

// const reduce = (array, howToCombine, buildingUp) => {
//     for (let i = 0; i < array.lenght; i++) {
//         buildingUp = howToCombine(buildingUp, array[i]);
//     }
//     console.log(buildingUp);
//     return buildingUp;
// }

// const add = (a, b) => a + b;

// const summed = reduce([1, 2, 3], add, 0);

// -- Should be called 'reduce from 2 things to 1 repeatedly, inside'
