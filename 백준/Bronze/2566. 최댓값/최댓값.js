const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let nums = [];

for (let i = 0; i < 9; i++) {
  nums.push(input[i].trim().split(" ").map(Number));
}

let max = nums[0][0]; // 초기값 설정
let row = 1;
let col = 1;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (nums[i][j] > max) {
      max = nums[i][j];
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max);
console.log(row, col);
