// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


const makeShirt = (size:string,message:string):void =>{
   console.log(`Your size is ${size} message says "${message}"`)
}
// call the function
// call the function with size andmessage variable
let size :string ="medium";
let message:string="your size is medium dont try large"

makeShirt(size,message)
makeShirt('large','Dont try medium size')

