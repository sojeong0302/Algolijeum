const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, X] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
let result = [];

for (let i = 0; i < A.length; i++) {
  if (X > A[i]) {
    result.push(A[i]);
  }
}

console.log(result.join(" "));
