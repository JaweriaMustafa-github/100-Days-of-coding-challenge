// Question 15

let guestsLists : string[] = ['Elsa' , 'Cindrella' , 'Snow white'];

guestsLists.forEach(guest => {
    console.log(`Hello ${guest}, would you like to join me for dinner?`);
});

// Question # 15
let unableToAttend = 'Snow white';
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace guest
let newGuest = 'Barbie';
guestsLists[guestsLists.indexOf(unableToAttend)] = newGuest;

// New Invitation 
guestsLists.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
