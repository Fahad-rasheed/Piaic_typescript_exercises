// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called newUsers. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the newUsers list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



const new_User:string[]=["asif","kamran","bisma","kulsoom","emaan","burhan"];
const current_users:string[]=["kamran","asad","ali","burhan","arif","asif"];


// step 2


function checkUserNames(current_users: string[] , new_User:string[] ): void
{ 
    
    const lowerCasedCurrentName = current_users.map(user=>user.toLowerCase()); 


    for (const _newuser of new_User) {
    
        const lowercasedNewUser = _newuser.toLowerCase();
    
        if(lowerCasedCurrentName.includes(lowercasedNewUser)){
        console.log(`username " ${_newuser}" is already taken. Please enter a new user`)
        }
          else{
               console.log(`username "${_newuser}" is available.`);
        }
    }   
}
checkUserNames(current_users , new_User)


export{}