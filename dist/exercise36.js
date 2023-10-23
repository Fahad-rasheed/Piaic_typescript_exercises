"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
const makeShirt = (size, message) => {
    console.log(`Your size is ${size} message says "${message}"`);
};
// call the function
// call the function with size andmessage variable
let size = "medium";
let message = "your size is medium dont try large";
makeShirt(size, message);
makeShirt('large', 'Dont try medium size');
