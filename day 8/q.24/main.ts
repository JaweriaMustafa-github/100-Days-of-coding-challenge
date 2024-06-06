// Question 24

// 1. 
let girl1 = "Fiza";
let girl2 = "Irha";
let girl3 = "Nadia";

// equality in strings
console.log("Testing inequality in strings:");
if (girl1.length !== girl3.length) {
    console.log("Both names don't have equal letters. \n");
}else
   {
    console.log("Both names have equal letters. \n");
  };

//  inequality in strings
console.log("Testing equality in strings:");

if (girl1.length === girl2.length) {
    console.log("Both names are equal in letters. \n");
}
  else
   {
    console.log("Both names are not equal in letters. \n");
  };


// 2.
// Using the lower case function
let city = "Karachi";
console.log("Testing with lowercase:");
console.log(city.toLowerCase(), "\n");

// 3.
//  Numerical tests
console.log("Numerical tests:");
console.log(10 < 5); // false
console.log(6 > 3, "\n");

// 4.
//  Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
let  sandwhich = true;
let   pasta = false
if(sandwhich && pasta) {
    console.log(true);
}else {console.log(false)}; // False

if(sandwhich || pasta ) {
    console.log(true);
} else {console.log(false)
}; // True

// 5.
// // Test whether an item is in an array
let vegetables = ["Potato", "Tomato", "Onion"];
console.log("Is 'Onion' in vegetables?");
console.log(vegetables.includes("Onion"), "\n"); // True

// 6.
// Test whether an item is not in an array
console.log("Is 'Chilli' in vegetables?");
console.log(vegetables.includes("Chilli"), "\n"); // False