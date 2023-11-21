const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (0 <= H && H <= 23 && 0 <= M && M <= 59) {
  M -= 45;

  if (M < 0) {
    M += 60;
    H -= 1;
  }

  if (H < 0) {
    H = 23;
  }

  console.log(H, M);
} else {
  process.exit(1);
}
