const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = Number(input[0]);
let temp = [];

for (let i = 1; i <= S; i++) {
  let [num, char] = input[i].trim().split(" ");
  let result = "";

  for (let i = 0; i < char.length; i++) {
    result += char[i].repeat(num);
  }
  console.log(result);
}
