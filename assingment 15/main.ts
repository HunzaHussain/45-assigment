


// Define array of guest// Question no 14 #
let guestlist:string [] = ["Maham","Shabana","Manahil","Anila"];

  // Invite each guest of dinner //
// guestlist.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
//   });

/// Question 15 # 
//unable to attent guest 
let not_present :string = "Shabana";

//Replace the guest
let new_guest: string ="farhana";
guestlist[1]=new_guest;

//new invitations 
guestlist.forEach(guest =>{
    console.log(`Dear ${guest},would you like to join me for dinner? `);
    
});
// for (let i= 0; i < guestlist.length; i++) {
//     console.log(`Dear` + guestlist [i] + `n\ you are invitng a dinner tomorrow.`);
    
// }
// console.log(`Dear.${not_present }  will not comimg tommorrow dinner `);
