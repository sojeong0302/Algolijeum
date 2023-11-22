const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let N = parseInt(input);

if (4 <= N && N <= 1000) {
  if (N % 4 === 0) {
    let longCount = N / 4;
    let result = "";
    for (let i = 0; i < longCount; i++) {
      result += "long ";
    }
    console.log(`${result}int`);
  }
}
