// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeShirt(size : string = "large",message:
string =" I love Typescript"):void
{
   return console.log(`Size: ${size}, Message: '${message}'`);
   
}
// Large shirt with default messaage
makeShirt();


//Medium shirt with a diffrent message and size

makeShirt("medium", "this perfect for average person");


makeShirt("small","this is for children")

