// # You Deserve Arrays

// ### Introduction

// This is an exercise for retrieving data from an array. Arrays are great and you will soon love them!

// ### Challenges

// 1. Write a program, `getFirstItemFrom.js` that prompts the user for an array, then logs out the first item in that array

//Call prompt into program
const prompt = require('prompt-sync')();

//define userArray
const userArray = [];

//Push first item to array.
userArray.push(prompt('Please type four colors. Press "Enter" after each entry to place it in Array '));
console.log('So far we have ', userArray);

// Display / Verify Array
userArray.push(prompt('What is your next selection:'));
console.log('So far we have ', userArray);

// Get third color
userArray.push(prompt('What is your next selection:'));
console.log('So far we have ', userArray);

// Get fourth color
userArray.push(prompt('What is your next selection:'));
console.log('Your color selections are: ', userArray);

//LOG OUT FIRST ARRAY
console.log(userArray[0], ' is probably your favorite color.')



//code good above here