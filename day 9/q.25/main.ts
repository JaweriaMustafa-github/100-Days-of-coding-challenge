// question 25

// version that passes
let alien_color = "green";
if (alien_color == "green"){
    console.log("You just earned 5 points!");
}

// version that fails
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
