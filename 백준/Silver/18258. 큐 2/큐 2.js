const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let queue = [];
let result = [];
let front = 0; // 큐의 맨 앞 인덱스를 가리키는 변수 추가

for (let i = 1; i <= N; i++) {
  let [cmd, value] = input[i].split(" ");
  value = Number(value);

  switch (cmd) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      if (front < queue.length) {
        result.push(queue[front++]); // front를 이용하여 값을 추출하고 front를 증가시킴
      } else {
        result.push(-1);
      }
      break;
    case "size":
      result.push(queue.length - front);
      break;
    case "empty":
      result.push(front === queue.length ? 1 : 0);
      break;
    case "front":
      result.push(queue.length > front ? queue[front] : -1);
      break;
    case "back":
      result.push(queue.length > front ? queue[queue.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));
