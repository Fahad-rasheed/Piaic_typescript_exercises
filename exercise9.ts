// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "FahAd RasHeed"

let lowerCase :string=personName.toLowerCase();
console.log(lowerCase)

let upperCase :string = personName.toUpperCase();
console.log(upperCase)



let word :string []=personName.split(" ");
let titlecase :string = ""
for (let i = 0 ; i < word.length; i++){
    titlecase +=word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase()+" "
};
console.log(titlecase)



export{}
