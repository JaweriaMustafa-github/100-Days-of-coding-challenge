function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Make a ".concat(size, " t-shirt with a message : \"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "IT is future");
