const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let Max = Math.max(...numbers);
let mod = [];

for (let i = 0; i < numbers.length; i++) {
  mod.push((numbers[i] / Max) * 100);
}

const average = mod.reduce((a, b) => a + b) / mod.length;
console.log(average.toFixed(2));
