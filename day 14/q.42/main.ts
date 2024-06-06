// Question 41

let magicians : string[] = ["John", "William", "Bob"];

function show_magicians(magicians : string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Question 42

function make_great(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
        
    }
}

make_great(magicians)
show_magicians(magicians)