"use strict";
// Create Function for Fruit Objects
Object.defineProperty(exports, "__esModule", { value: true });
function CreateFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
// Create an array of Fruits
const fruits = [
    CreateFruit("Apple", "Red", "Sweet"),
    CreateFruit("Banana", "Yellow", "Tart"),
    CreateFruit("Orange", "Orange", "Citrusy"),
    CreateFruit("Guava", "Green", "Salty")
];
// Across an invalid index
const invalidIndex = 10; //there are only 5
console.log(`Fruits at index ${invalidIndex}:`, fruits[invalidIndex]);
//Print the fruits
fruits.forEach((fruits) => {
    console.log(`Name: ${fruits.name}, Color: ${fruits.color}, Taste: ${fruits.taste} `);
});
