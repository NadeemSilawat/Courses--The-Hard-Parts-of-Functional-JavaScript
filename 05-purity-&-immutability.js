
// ///////////  Pure Fumction ///////////  //


let num = 10;

const add3 = (x) => {
    num++
    return x + 3
}

console.log(add3(7));





// /////////// Immutability ///////////  //


const array = [1, 2, 3]
const multiplyBy2 = num => num * 2

const result = array.map(multiplyBy2) // [2,4,6]
const newResult = array.map(multiplyBy2) // [2,4,6]