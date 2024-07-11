                   //ASSINGMENT (QUESTION 3)
// Name cases: Store a person's name in a variable, and then print that person's name in lowercase,uppercase, and tittlecase.//

import { log } from "console";



     // STORING A PERSON NAME IN A VARIABLE//


 let myName: string ="Hunza Hussain"; //// This saves the name

     //PRINTING A PERSON NAME IN LOWERCASE//

 console .log ("lowercase:", myName.toLowerCase()); ///// Shows the name in all small letters

     //PRINTING A PERSON NAME IN UPPERCASE//
console.log("uppercase:",myName.toUpperCase());
     
// console.log("uppercase:", myname.toLocaleUpperCase()); ///// Shows the name in ALL BIG LETTERS

    //PRINTIN A PERSON NAME IN TITTLECASE//
 console.log( "tittlecase:", myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase());// Shows the name with the First Letter Big
    




