let x = Math;
console.log(x.max);

let y = undefined;
let t = null;
console.log(y.length); // Uncaught TypeError
console.log(x.length); // Uncaught TypeError