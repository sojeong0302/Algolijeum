const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = parseInt(input[0]);
let number = input[1].split(" ").map(Number);

let Min = Math.min(...number);
let Max = Math.max(...number);

console.log(`${Min} ${Max}`);
