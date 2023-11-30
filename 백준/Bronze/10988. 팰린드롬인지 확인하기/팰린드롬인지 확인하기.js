const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const STR = input;
let reversed = STR.split("").reverse().join("");

let isPalindrome = STR === reversed;

console.log(isPalindrome ? 1 : 0);
