const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let queue = [];
let result = [];
let front = 0;
let back = 0;

function push(value) {
  queue[back++] = value;
}

function pop() {
  return front !== back ? queue[front++] : -1;
}

function size() {
  return back - front;
}

function empty() {
  return front === back ? 1 : 0;
}

function getFront() {
  return front !== back ? queue[front] : -1;
}

function getBack() {
  return front !== back ? queue[back - 1] : -1;
}

for (let i = 1; i <= N; i++) {
  let [cmd, value] = input[i].trim().split(" ");
  value = value ? Number(value) : null;

  switch (cmd) {
    case "push":
      push(value);
      break;
    case "pop":
      result.push(pop());
      break;
    case "size":
      result.push(size());
      break;
    case "empty":
      result.push(empty());
      break;
    case "front":
      result.push(getFront());
      break;
    case "back":
      result.push(getBack());
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));
