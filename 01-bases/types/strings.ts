// Anonymous self-invoking function
(() => {
  const batman: string = "Batman";
  const superman: string = "Super Man";
  const spiderman: string = `Hero: Spoderman`;

  console.log(batman.toUpperCase());
  console.log(`I´m ${batman}`);
  console.log(batman[10]?.toUpperCase() || "Not value");
})();
