const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let X = parseInt(input[0]);
let N = parseInt(input[1]);
let result = 0;

for (let i = 2; i < 2 + N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  result += a * b;
}

if (X === result) {
  console.log("Yes");
} else {
  console.log("No");
}
