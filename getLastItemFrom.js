// 2. Write a program, `getLastItemFrom.js` that prompts the user for an array, then logs out the last item from that array
//Call prompt into program
const prompt = require('prompt-sync')();

//define userArray
const userArray = [];

//Push first item to array.
userArray.push(prompt('Please type four numbers. Press "Enter" after each entry to place it in the Array '));
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
console.log(userArray[3], ' is probably your fourth favorite number.')



//code good above here