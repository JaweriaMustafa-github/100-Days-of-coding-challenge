// Question 18

let places : string[] = ["Pakistan" , "Palestine" , "Turkey" , "Saudi Arab" , "Afghanistan"];

console.log(`Original order : ${places}`);

console.log("Alphabetical order:", [...places].sort());

console.log(`Original order : ${places}`);

console.log("Reverse Alphabetical order : ", [...places].sort().reverse());

console.log(`Original order: ${places}`);

places.reverse();
console.log(`Reversed order : ${places}`);

places.reverse();
console.log(`Original order : ${places}`);

places.sort();
console.log(`Alphabetical order : ${places}`);

places.reverse();
console.log(`Reverse Alphabetical order : ${places}`);