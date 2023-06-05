"use strict";
// Anonymous self-invoking function
(() => {
    const numbers = [1, 2, 3, "4", 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    numbers.push("12");
    console.log(numbers);
    const heros = ["Superman", "Spiderman", "Batman"];
    heros.forEach((hero) => {
        return console.log(hero.toUpperCase());
    });
    heros.forEach((hero) => console.log(hero.toUpperCase()));
})();
