// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Step 1
let guestlist: Array<string>=[
    "Fawad",
    "salman",
    "Samad",
    "Ali",
"Elon Mush",
"Albert Einstein"];

let guestnotcome : string = "Ali"
console.log(`${guestnotcome} can't make it to dinner`)

// step 2 Replace the name of guest who not come

let new_guest : string = "Abid Sherwani";
let indexOfguestnotcome: number = guestlist.indexOf(guestnotcome)
// console.log(indexOfguestnotcome)
if(indexOfguestnotcome !== -1){
    guestlist[indexOfguestnotcome] = new_guest;
}
// console.log(guestlist[3])
// step 3 Print a second set of invitation messages
console.log("second set invitation messages: ")
guestlist.forEach((guest:string)=>
{
    console.log(`Dear ${guest}, you are invited to dinner.`)
})


export{guestlist}