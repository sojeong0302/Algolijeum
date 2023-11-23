const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numArr = [];
let divNum = [];

for (let i = 0; i < input.length; i++) {
  numArr.push(Number(input[i]));
}

for (let k = 0; k < numArr.length; k++) {
  divNum.push(Number(numArr[k] % 42));
}

console.log(new Set(divNum).size);
