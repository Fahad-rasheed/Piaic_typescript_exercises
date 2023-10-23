// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



// array of magician's names
const magicianNames: string[]=["Harry Porter", "David Copperfield", "Hermione Granger" , "Professor ALbus Dumbledore","Ron Weasley"];


function showMagicians(magicians: string[]):void
{
    for(const magician  of magicians){
        console.log(magician);
    }
}
function make_great(magicians:string[]):string[]{
    const greatMagicians: string[]=magicians.map(magician =>`the Great ${magician} `);
    return greatMagicians;
}


// modify the array to add the great to each magician's name
const greatMagiciansName: string[]=make_great(magicianNames);



console.log("original magicians")
showMagicians(magicianNames)


console.log("\nGreat Magicians")
showMagicians(greatMagiciansName)


