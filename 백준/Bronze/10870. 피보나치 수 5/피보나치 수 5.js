const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

function fun(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  return fun(num - 1) + fun(num - 2);
}

console.log(fun(n));
