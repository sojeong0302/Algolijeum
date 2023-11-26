const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0].split("");

const alphabets = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let totalTime = 0;

for (let i = 0; i < str.length; i++) {
  for (let key in alphabets) {
    if (key.includes(str[i])) {
      totalTime += alphabets[key];
      break;
    }
  }
}

console.log(totalTime);
