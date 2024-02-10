

// //////// Function Decoration ////////// //

// const oncify = (convertMe) => {
//     let counter = 0
//     const inner = (input) => {
//         if (counter === 0) {
//             const output = convertMe(input)
//             counter++
//             return output
//         }
//         return "Sorry"
//     }
//     return inner
// }

// const multiplyBy2 = (num) => num * 2;
// const oncifiedMultiplyBy2 = oncify(multiplyBy2)

// console.log(oncifiedMultiplyBy2(10))
// console.log(oncifiedMultiplyBy2(2))





// //////// Partial application ////////// //

// --It’s known as ‘Partial application’


const multiply = (a, b) => a * b;

function prefillFunction(fn, prefilledValue){
    const inner = (liveInput) =>{
        const output = fn(liveInput , prefilledValue)
        return output
    }
    return inner
}

const multiplyBy2  = prefillFunction(multiply,2)
const result  = multiplyBy2(5)

console.log("result", result);






/* --Partial application and currying

    — In practice we may have to prefill one, two... multiple
    arguments at different times
    
    — We can convert (‘decorate’) any function to a
    function that will accept arguments one by one and
    only run the function in full once it has all the
    arguments

    — This is a more general version of partial application
*/