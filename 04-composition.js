

// //////  Function Composition with Reduce /////////// //

/* And we can 'chain' these higher order functions - pass the
      output of one as the input of the next -- */

// const array = [1, 2, 3, 4, 5, 6];
// const gretherThan2 = num => num > 2;
// const add = (a, b) => a + b

// const sumOfGreaterThen2 = array.filter(gretherThan2).reduce(add, 0);

// console.log(sumOfGreaterThen2)





// ========== Function Composition Review ========== //

/* -- Listing out our 'lines of code'(functions) by name with each one's consequence
      limited to only affect the next 'line' (function call/ invocation) -- */

const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;
const subtract4 = x => x - 4;

const reduce = (array, howToCombine, buildingUp) => {
    for (let i = 0; i < array.length; i++) {
        buildingUp = howToCombine(buildingUp, array[i]);
    }
    console.log(buildingUp)
    return buildingUp;
}

const runFunctionOnInput = (input, fn) => { return fn(input) }

const output = reduce([
    multiplyBy2,
    add3,
    divideBy5,
    subtract4
],
    runFunctionOnInput, 11
);
