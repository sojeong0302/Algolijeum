const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let list = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  list.push(input.indexOf(String.fromCharCode(i)));
}

console.log(list.join(" "));
