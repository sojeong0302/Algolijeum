const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  if (isNaN(A) || isNaN(B)) {
    break;
  }

  const result = A + B;
  console.log(result);
}
