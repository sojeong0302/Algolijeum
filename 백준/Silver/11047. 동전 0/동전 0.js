const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, K] = input[0].split(" ");
let money = [];
let result = 0;

for (let i = 1; i <= N; i++) {
  money.push(Number(input[i]));
}

money.reverse();

for (let i = 0; i < N; i++) {
  if (K >= money[i]) {
    result += parseInt(K / money[i]);
    K %= money[i];
  }
}

console.log(result);
