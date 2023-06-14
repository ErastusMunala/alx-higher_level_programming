#!/usr/bin/node

const number = parseInt(process.argv[2]);
function Factorial (number) {
  if (number === 0 || isNaN(number)) {
    return 1;
  } else {
    return number * Factorial(number - 1);
  }
}

console.log(Factorial(number));
