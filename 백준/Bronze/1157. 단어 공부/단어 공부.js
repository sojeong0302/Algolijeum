const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase();

let arr = [];
let arr2 = Array(26).fill(0);
for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++) {
  arr.push(String.fromCharCode(i));
}

for (let i = 0; i < input.length; i++) {
  arr2[arr.indexOf(input[i])]++;
}
let cnt = 0;
const maxNum = Math.max.apply(null, arr2);
arr2.indexOf(maxNum) == arr2.lastIndexOf(maxNum)
  ? console.log(arr[arr2.indexOf(maxNum)])
  : console.log("?");
