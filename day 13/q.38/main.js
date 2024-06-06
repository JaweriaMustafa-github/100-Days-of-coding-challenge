function describe_cities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_cities("Karachi");
describe_cities("Lahore");
describe_cities("Madinah", "Saudi Arab");
