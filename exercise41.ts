// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Array's of megician's names
const magicianNames: string[]=["Harry Porter", "David Copperfield", "Hermione Granger" , "Professor ALbus Dumbledore","Ron Weasley"];


function show_magicians(magicians: string[]):void
{
    for(const nameOf of magicians){
        console.log(`${nameOf} is a great magician!`);
    }
}
show_magicians(magicianNames);

