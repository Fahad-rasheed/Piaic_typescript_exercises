// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


// list of animals with a common characteristic
const animals :string[] =["cat" ,"dog" , "goat"];


// Printing the names of each animal using a for of loop

console.log ("List of Animals")

for(const animal of animals){
    console.log(animal )

}

console.log("\nStatement about each animal")

for (const animal of animals){
    if(animal==="dog"){
        console.log(`A ${animal} is a loyal and friendly companion.`)
    }
    else if(animal==="cat"){
        console.log(`A ${animal} has beautiful fur and can be very cute.`)
    }
    else if(animal==="goat"){
        console.log(`A ${animal} provides fresh milk and meat.`)
    }
}

console.log("\nWhat these animals have in common:");
console.log("Any of these animls would make a great pet!");