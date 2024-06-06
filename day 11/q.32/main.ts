// Question 32
let currentUsers : string[] = ["admin", "user1", "user2", "user3", "user4"];
let newUsers : string[] = ["admin", "user5", "user3", "user6", "user7"];
newUsers.forEach(new_user => {
    if (
        currentUsers.some(
            current_user => current_user.toLowerCase() === new_user.toLowerCase()
        )
    ) {
        console.log(`${new_user} will need to enter a new username.`);
    } else {
        console.log(`${new_user} is available`);
    }
});