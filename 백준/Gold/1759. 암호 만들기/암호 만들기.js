const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);

const VOWELS = ["a", "e", "i", "o", "u"];
// const CONSONANTS = [
//   "b",
//   "c",
//   "e",
//   "f",
//   "g",
//   "h",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
const characters = input[1].split(" ").sort(); // 주어진 문자열을 정렬

function isPasswordValid(password) {
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of password) {
    if (VOWELS.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }

  return vowelCount >= 1 && consonantCount >= 2;
}

function generatePasswords(index, password) {
  if (password.length === L) {
    if (isPasswordValid(password)) {
      console.log(password);
    }
    return;
  }

  for (let i = index; i < C; i++) {
    generatePasswords(i + 1, password + characters[i]);
  }
}

generatePasswords(0, "");
