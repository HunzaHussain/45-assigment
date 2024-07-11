// Assingment # 37
function make_shirt(size, message) {
    if (size === void 0) { size = "LARGE"; }
    if (message === void 0) { message = "I LOVE TYPESCRIPT"; }
    console.log("Making a  ".concat(size, " shirt with the ").concat(message, " print on shirt."));
}
;
make_shirt(); /// Default large and message
make_shirt("medium"); /// Default message medium size
make_shirt("small", "I Love javascript"); ///Custom message small size 
// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
//     }
//     make_shirt(); // Default large and message
//     make_shirt("medium"); // Default message, medium size
//     make_shirt("small", "Dive into Coding"); // Custom message, small size
