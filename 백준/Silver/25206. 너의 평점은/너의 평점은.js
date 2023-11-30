const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const CREDIT = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalCreditPoints = 0;
let totalCredits = 0;

for (let i = 0; i < input.length; i++) {
  let [name, credit, grade] = input[i].trim().split(" ");

  if (grade !== "P") {
    let creditNumber = Number(credit);
    let gradeNumber = Number(CREDIT[grade]);

    totalCreditPoints += creditNumber * gradeNumber;
    totalCredits += creditNumber;
  }
}

const averageGrade = totalCreditPoints / totalCredits;

console.log(averageGrade.toFixed(6));
