// 3. Write a program `getIndex3.js` that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index

const prompt = require('prompt-sync')();

//define userArray
const userArray = [];

//define counters
let famCount = 0;
let counter = 0;

//Push first item to array.
userArray.push(prompt('Please enter your family members. Press "Enter" after each entry to place into your family array '));
console.log('So far we have ', userArray);

//Ask for more people
let morePeps = prompt('Are there more people to add (press y for yes and n for No)? ');

// Increase counter
counter++;

//log out #of morePeps
console.log(morePeps);

// While loop runs while there are more people, until family is full (4);
while (morePeps === 'y') {

    //Push next item into array.
    userArray.push(prompt('Please enter your family members. Press "Enter" after each entry to place into your family array '));
    console.log('So far we have ', userArray);
    morePeps = prompt('Are there more people to add (press y for yes and n for No)? ');
    counter++;



}
console.log('Looks like you have got yourself a family of ', userArray.length);

if (counter < 3) {
    famCount = counter;
} else {
    famCount = 2
}
//LOG OUT THIRD ARRAY
console.log(userArray[famCount], ' is the third or last family member you entered (if less than 3).')



//code good above here