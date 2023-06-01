"use strict";
// Anonymous self-invoking function
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
    isSuperman = isBatman ? true : false;
})();
