const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = parseInt(input[0]);
let number = [];
let targetNumber = parseInt(input[2]);
for (let i = 0; i < N; i++) {
  number = input[1].split(" ").map(Number);
}

let count = 0;
for (let i = 0; i < N; i++) {
  if (number[i] === targetNumber) {
    count++;
  }
}

console.log(count);
