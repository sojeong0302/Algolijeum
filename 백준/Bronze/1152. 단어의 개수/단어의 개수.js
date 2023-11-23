const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0].split(" ");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== "") {
    count++;
  }
}
console.log(count);
