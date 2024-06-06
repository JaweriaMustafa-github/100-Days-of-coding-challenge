var guests = ['Haya', 'Anam', 'Linta'];
console.log("Great news! I found a bigger dinner table");
// Adding more guests
guests.unshift("Amna");
guests.splice(guests.length / 2, 0, "Fizza");
guests.push("Ghazal");
guests.forEach(function (guest) {
    console.log("".concat(guest, " , would you like to join me for dinner?"));
});
