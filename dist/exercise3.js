"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "FahAd RasHeed";
let lowerCase = personName.toLowerCase();
console.log(lowerCase);
let upperCase = personName.toUpperCase();
console.log(upperCase);
let word = personName.split(" ");
let titlecase = "";
for (let i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecase);
