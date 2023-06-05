// Anonymous self-invoking function
(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Stranger";
  console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0));
  console.log((<string>avenger).length);

  console.log(exists);
})();
