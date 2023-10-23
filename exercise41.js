"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
// Array's of megician's names
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor ALbus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const nameOf of magicians) {
        console.log(`${nameOf} is a great magician!`);
    }
}
show_magicians(magicianNames);
