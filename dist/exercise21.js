"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bouquet = {
    name: "Spring Delight",
    price: 150,
    description: "A beautiful bouquet of spring flowers.",
};
//Define an array of objects
let bouquets = [];
// Pushing multiple Objects
bouquets.push(bouquet);
bouquets.push({ name: "Summerbliss", price: 500, description: "beautiful arrangment of summer flower" });
let bouquet3 = {
    name: "Autumnal Blossom",
    price: 300,
    description: "Beautiful arrangement of Autumn"
};
bouquets.push(bouquet3);
// console.log(bouquets);
// function to display bouquets
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(` title: ${i.name}
            description:${i.description}
            price:${i.price}
            ____________________\n`);
    }
}
displayBouquets(bouquets);
