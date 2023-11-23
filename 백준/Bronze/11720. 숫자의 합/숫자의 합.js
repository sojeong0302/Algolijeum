const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let numbers = input[1].trim(); // 줄 바꿈 문자 제거
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}

console.log(sum);
