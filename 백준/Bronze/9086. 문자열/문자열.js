const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let str = [];

for (let i = 1; i <= T; i++) {
  const splitted = input[i].trim().split("");
  const firstCharacter = splitted[0];
  const lastCharacter = splitted[splitted.length - 1];
  str.push(firstCharacter + lastCharacter);
}

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
