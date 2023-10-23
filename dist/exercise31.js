"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// empty array case:
let emptyUserNames = [];
// non-empty array case:
let userNames = ["admin", "faraz", "salman", "fawad", "fahad"];
// functional case
function greetUsers(userNames) {
    if (userNames.length === 0) {
        console.log(` we need to find some users`);
    }
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log(`Hello admin! would you like to see status report?`);
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
console.log(`for non empty usernames:\n`);
greetUsers(userNames);
console.log(`\n\nfor empty username:\n`);
greetUsers(emptyUserNames);
