"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// array of magician's names
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor ALbus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const nameOf of magicians) {
        console.log(`${nameOf} is  magician!`);
    }
}
function makeGreat(magicians) {
    const greatMagicians = magicians.map(nameOf => `the Great ${nameOf} `);
    return greatMagicians;
}
// modify the array to add the great to each magician's name
const greatMagiciansName = makeGreat(magicianNames);
console.log("original magicians");
show_magicians(magicianNames);
show_magicians(greatMagiciansName);
console.log("\nGreat Magicians");
show_magicians(magicianNames);
