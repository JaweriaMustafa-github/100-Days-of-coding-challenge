// Question # 16

let guests : string[] = ['Haya', 'Anam', 'Linta'];
console.log(`Great news! I found a bigger dinner table`);

// Adding more guests

guests.unshift("Amna");
guests.splice(guests.length/2,0, "Fizza");
guests.push("Ghazal");

guests.forEach(guest => {
    console.log(`${guest} , would you like to join me for dinner?`);
});

// Question # 17

console.log(`Unfortunately ! I can only invite two people at dinner.`);

while(guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner `);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(`Empty list: [${guests}]`);
