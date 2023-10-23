"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
// • Tests using the lower case function
const text1 = "Hello";
const text2 = "hello";
console.log(text1.toLowerCase() === text2); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); //true, both
// condition are true
console.log(x < y || y < z); //true, either one of them true
// condition are true
console.log(x > y && y < z); //false both
// condition are false
console.log(x > y || y > z); //false both
// condition are false
// • Test whether an item is in a array
const fruit = ["apple", "banana", "orange", "grape"];
console.log(fruit.includes("banana")); //true
console.log(fruit.includes("mango")); //false
// • Test whether an item is not in a array
const color = ["red", "green", "blue", "yellow"];
console.log(!color.includes("purple")); //true
console.log(!color.includes("yellow")); //false
