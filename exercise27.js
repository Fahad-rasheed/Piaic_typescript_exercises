"use strict";
// Alien Colors #3: Turn your if-else chain from Previous Exercises into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// 1st version 
console.log(` 1nd version is alien color is green `);
let alien_color = "green";
if (alien_color === "green") {
    console.log("You earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("you earn 10 points");
}
else if (alien_color === "red") {
    console.log("you earn 15 points");
}
else {
    console.log("Invalid color");
}
// 2nd version
console.log(` 2nd version is alien color is yellow `);
alien_color = "yellow";
if (alien_color === "green") {
    console.log("You earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("you earn 10 points");
}
else if (alien_color === "red") {
    console.log("you earn 15 points");
}
else {
    console.log("Invalid color");
}
// 2nd version where align color red
console.log(` 2nd version is alien color is red `);
alien_color = "red";
if (alien_color === "green") {
    console.log("You earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("you earn 10 points");
}
else if (alien_color === "red") {
    console.log("you earn 15 points");
}
else {
    console.log("Invalid color");
}
