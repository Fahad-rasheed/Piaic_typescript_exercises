// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
//   Then use your list to print a message to each person, inviting them to dinner.

let guestlist: Array<string>=[
    "Fawad",
    "salman",
    "Samad",
    "ali",
"Elon Mush",
"Albert Einstein"];
guestlist.forEach((guestName) => {
    console.log(`Dear ${guestName}, you’d like to invite to dinner.`);
    
}); 
    



export{}