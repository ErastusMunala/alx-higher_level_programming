#!/usr/bin/node

const frequency = parseInt(process.argv[2]);
if (frequency) {
  for (let i = 1; i <= frequency; i++) {
    console
      .log('C is fun');
  }
} else {
  console.log('Missing number of occurences');
}
