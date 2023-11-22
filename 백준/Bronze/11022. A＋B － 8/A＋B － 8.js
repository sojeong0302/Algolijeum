const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  let result = A + B;
  console.log(`Case #${i}: ${A} + ${B} = ${result}`);
}
