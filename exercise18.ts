// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// step 1 create an array store travel destination

let travelDestination : string[] = ["Tokyo","Paris","Madina Munawara","Cayman","St Maartin"]


// step 2 print Array in original Order
console.log("original Order")
console.log(travelDestination)

// step 3 Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order without modifying the actual list.")
console.log([...travelDestination].sort())

// step 4 Show that your array is still in its original order by printing it.

console.log("\n Show that your array is still in its original order.")
console.log(travelDestination)


// step 5 Print your array in reverse alphabetical order without changing the order of the original list.

console.log("alphabetical order without modifying the actual list.")
console.log([...travelDestination].sort().reverse())


// step 6 • Show that your array is still in its original order by printing it again

console.log("\n Show that your array is still in its original order.")
console.log(travelDestination)


// step 7  • Reverse the order of your list. Print the array to show that its order has changed.

 console.log("\n Reverse order")
travelDestination.reverse()
 console.log(travelDestination)

//  Step 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Reverse order back to orignal")
travelDestination.reverse()
console.log(travelDestination)

//Step 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n change to Alphabetical Order")
travelDestination.sort()
console.log(travelDestination)

// Step 10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n change to reverse Alphabetical Order")
travelDestination.sort().reverse()
console.log(travelDestination)
