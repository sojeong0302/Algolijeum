const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = new Array(N);

for (let i = 1; i <= M; i++) {
  let [start, end, k] = input[i].split(" ").map(Number);
  for (start; start <= end; start++) {
    arr[start - 1] = k;
  }
}

for (let j = 0; j < arr.length; j++) {
  typeof arr[j] === "undefined" ? (arr[j] = 0) : arr[j];
}

console.log(arr.join(" "));
