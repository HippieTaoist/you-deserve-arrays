// 5. `firstItemIsNumber.js`: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number

//Call in prompt sync
const prompt = require('prompt-sync')();

//Define terms
let userArray = [];
let numUserArray = 0;

//Involve user
userArray = prompt('Please enter a string of numbers and letters or letters and numbers or lneutmtbeerss...');

numUserArray = Number(userArray[0]);
console.log(numUserArray);
if (isNaN(numUserArray)) {
    console.log('The first character in your enter is Not A Number. --->> ', numUserArray);
} else {
    console.log(numUserArray, ' is a Number!!')
}

// Code works abovr this line