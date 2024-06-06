// Question 32
var currentUsers = ["admin", "user1", "user2", "user3", "user4"];
var newUsers = ["admin", "user5", "user3", "user6", "user7"];
newUsers.forEach(function (new_user) {
    if (currentUsers.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
});
