// Question 45

function makeCar (
    manufacturer : string,
    model : string,
    ...options: [string , any] []
) {
    let car = {manufacturer , model};
    options.forEach(([key,value]) => (car[key] = value));
    return car;
}
console.log(makeCar("Toyota", "Corolla", ["color", "silver"], ["year", "2020"]));
console.log(makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
