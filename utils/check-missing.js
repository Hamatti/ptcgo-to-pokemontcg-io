const fs = require("fs");
const csvLoader = require("csv-load-sync");

if (process.argv.length !== 3) {
  console.log("Usage: node check-missing.js [filename]");
}

const filename = process.argv[2];
const csv = csvLoader(filename);

const numbers = [];

csv.forEach((row) => {
  const { api } = row;

  const number = parseInt(api.split("-")[1]);
  numbers.push(number);
});

numbers.sort((a, b) => a - b);

for (let i = 1; i < numbers.length; i++) {
  const prev = numbers[i - 1];
  const curr = numbers[i];

  if (curr - prev !== 1) {
    console.log(`Something's missing between ${prev} and ${curr}`);
  }
}
