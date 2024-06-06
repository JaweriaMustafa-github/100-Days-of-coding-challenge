// Question 37

function make_shirt(size : string = "large" , message : string = "I love Typescript") {
    console.log(`Make a ${size} t-shirt with a message : "${message}" printed on it`);
} 
make_shirt();
make_shirt("medium");
make_shirt("small", "IT is future");