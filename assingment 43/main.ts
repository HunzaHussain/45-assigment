// Assingment # 43 

function show_magicians(magicians:string[]){
    magicians .forEach(name => console.log(name)
    );
}
function make_greet(magicians:string[]){
    return magicians.map  (name =>`The Great ${name}`)
}

let magicians_names =["ali","osama","asif"]
let copy_magicians_names= magicians_names.slice()
let copy_great_magicians=make_greet(copy_magicians_names)


console.log("\n Original Array\n");
show_magicians(magicians_names)

console.log("\n Copied Array\n");
show_magicians(copy_great_magicians)
