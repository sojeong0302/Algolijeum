const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let stack = [];
let result = [];

for (let i = 1; i <= N; i++) {
  let [num, value] = input[i].split(" ");

  switch (num) {
    case "1":
      stack.push(Number(value));
      break;
    case "2":
      if (stack.length > 0) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
      break;
    case "3":
      result.push(stack.length);
      break;
    case "4":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "5":
      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));
