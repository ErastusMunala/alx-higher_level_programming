#!/usr/bin/node

const side = parseInt(process.argv[2]);
if (side) {
  for (let i = 0; i < side; i++) {
    let j = 0;
    for (; j < side; ++j) {
      process.stdout.write('X');
    }

    if (j === side) {
      console.log('');
    }
  }
} else {
  console
    .log('Missing size');
}
