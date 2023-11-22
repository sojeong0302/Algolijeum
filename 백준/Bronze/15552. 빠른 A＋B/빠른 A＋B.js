const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let T = parseInt(input[0]);
let result = "";
for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].split(" ");
  let num = input[i].split(" ");
  result += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(result);
