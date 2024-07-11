// function show_magicians(magicians:string []){
//     magicians.forEach(name =>console.log(name)
//      );
// }
// function make_great(magicians:string[]){
//     return magicians.map(name => ` The Great ${name}`)
//   }
// let magicians_name= ["ali","osama","asif"]
// let  great_magicians = make_great (magicians_name)
// show_magicians(great_magicians)
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
