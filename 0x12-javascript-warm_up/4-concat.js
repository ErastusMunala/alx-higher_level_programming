#!/usr/bin/node

function Concatenate () {
  const arg1 = process.argv[2];
  const arg2 = process.argv[3];
  return console.log(arg1 + ' is ' + arg2);
}
Concatenate();
