/**
 * Write a module called my_math.js. Your module should expose the following functions and constant:
    add(x, y)
    subtract(x, y) 
    multiply(x, y)
    divide(x, y)
    pi // constant set to 3.14

    If you’ve implemented it correctly you should be able to put the code shown on the next page into a file called use_my_math.js and run it without errors.   
 */

const pi = 3.14;

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if (y === 0) {
        console.log("Denumerator can not be zero!");
        return;        
    }
    return x / y;
}

let math = {
    pi: pi,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}

module.exports = math;