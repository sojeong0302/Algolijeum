const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let n = parseInt(input);

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
