const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const PICE = [1, 1, 2, 2, 2, 8];
let havePice = [];
let result = [];
for (let i = 0; i < PICE.length; i++) {
  havePice.push(Number(input[i]));
}

for (let j = 0; j < PICE.length; j++) {
  result.push(Number(PICE[j] - havePice[j]));
}

console.log(result.join(" "));
