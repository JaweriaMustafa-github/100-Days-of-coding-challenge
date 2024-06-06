var guestsLists = ['Elsa', 'Cindrella', 'Snow white'];
guestsLists.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", would you like to join me for dinner?"));
});
// Question # 15
var unableToAttend = 'Snow white';
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace guest
var newGuest = 'Barbie';
guestsLists[guestsLists.indexOf(unableToAttend)] = newGuest;
// New Invitation 
guestsLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
