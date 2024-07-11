                // ASSINGMENT (QUESTION 14)//               
// Guest list:if you could invite anyone, living or deceased.who could you invite?Make a list that includes at least three people you'd like to invite to dinner.then use your list to print a message to each person, inviting them to dinner.

   // Define array of guest//
let guestlist:string [] = ["Maham","Shabana","Manahil","Anila"];

  // Invite each guest of dinner //
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
  });
