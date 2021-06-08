// 6. `secondCharOfThirdString.js`: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead


//Call prompt-sync
const prompt = require('prompt-sync')();

//Define terms
let userArray = prompt('Please enter three items that you need this week for groceries.');

let splitString = userArray.split(' ');

let newSplit = splitString[2];




console.log(splitString);

console.log(typeof newSplit);

if (typeof newSplit[1] === 'string') {
    console.log('you have yourself a string');
} else {
    console.log('Error Error Error');
}
console.log(newSplit[1]);
// console.log(splitString[1]);