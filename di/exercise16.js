"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist = [
    "Fawad",
    "salman",
    "Samad",
    "Ali",
    "Elon Mush",
    "Albert Einstein"
];
// step 1
for (let guest of guestlist) {
    console.log(`Hello! ${guest}, we found a bigger table for dinner.`);
}
//  Step 2 Add a new guest to the beginning of Array.
let newGuestatBeginning = "Kulsoom Owais";
guestlist.unshift(newGuestatBeginning);
console.log(guestlist);
// step 3 Add a new one guest to the middle of Array
let newGuestinMiddle = "Ayesha Samar";
let middleIndex = Math.floor(guestlist.length / 2);
// console.log(middleIndex)
guestlist.splice(middleIndex, 0, newGuestinMiddle);
console.log(guestlist);
// step 4 Use append() to add one new guest to the end of your list.
let newGuestAtEnd = "Bisma Siddique";
guestlist.push(newGuestAtEnd);
console.log(guestlist);
// step 4 print a new set of invitation messages
console.log("New set of Invitation messages:");
for (let guest of guestlist) {
    console.log(`Dear ${guest} , please join us at our dinner party on Friday night.`);
}
