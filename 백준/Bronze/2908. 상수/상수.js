const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = input[0].split("");
const B = input[1].split("");

const reverseA = A.reverse();
const reverseB = B.reverse();

if (reverseA > reverseB) {
  console.log(reverseA.join(""));
} else {
  console.log(reverseB.join(""));
}
