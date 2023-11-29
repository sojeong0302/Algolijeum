const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let spaces = " ".repeat(N - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

for (let i = N - 1; i > 0; i--) {
  let spaces = " ".repeat(N - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
