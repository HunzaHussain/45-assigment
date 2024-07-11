// Assingment (Question 31)

/* 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/


// Remove all usernames and print meesage
 let usernames:string[]=[]
if (usernames .length===0) {
    console.log("We need to find some users!");
    
}else{
    usernames.forEach(oneuser =>{
        if (oneuser==="Admin") {
          console.log(`Hello ${oneuser},"Would You Like a Status Report?"`);
          
        }else{
          console.log(`Hello ${oneuser}, "Thank you for logging in again."`);

          
        }
      
    });
}

// Removing all usernames ensures the message "We need to find some users!" is printed.