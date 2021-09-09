var prompt = require('prompt-sync')();

var num1 = Number(prompt("Number 1 "));
var num2 = Number(prompt("Number 2 "));
var num3 = Number(prompt("Number 3 "));

numbers = []
numbers.push(num1)
numbers.push(num2)
numbers.push(num3)

// num1 = 7
// num2 = 8


console.log("Hello.  You chose " + numbers)
const maxOfTwoNumbers = () => {
    if (num1 > num2) {
    return  num1 + " is the largest of your first two choices "
    } else if (num2 > num1) {
    return num2 + " is the largest of your first two choices"
    } else return "Your first two choices are equal"
    }
console.log(maxOfTwoNumbers(num1,num2))



const maxOfThree = () => {
    if (num1 > num2 & num1 > num3) {
    return num1 + " is the biggest of the three"            
    } else if ( num2 > num1 && num2 > num3) {
    return num2 + " is the biggest of the three"
    } else return num3 + " is the biggest of the three"
}

console.log(maxOfThree(num1,num2,num3))
var sum = 0             //remember t declare the variable being worked with, outside of the loop. if declared in loop, loop will set to 0 every iteration
const sumArray = () => {
    for (let i = 0 ; i < numbers.length ; i++ ) {           //looped addition
        sum+= numbers[i]
    }
    return "The sum of all 3 is " + sum
}

console.log(sumArray(numbers))

var product = 1             //in case of product, variable should be 1, if product is set to 0, whole equation will end up with 0
const multiplyArray = () => {
    for (let i = 0 ; i < numbers.length ; i++ ) {           //looped addition
        product*= numbers[i]
    }
    return "The product of all 3 is " + product
}
console.log(multiplyArray(numbers))

const countArg = () => {         //im not sure how to get this one to work, im not entirely sure I understand what's being asked though.
    argCount = 0;
    for (i=0; i<arguments.length; i++) {
        argCount++
    }}
console.log(countArg(multiplyArray()))