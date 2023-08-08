const fs = require("fs");
const readline = require("readline");

const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
});

let N = 0;

rl.on("line", function (line) {
  N = Number(line);
}).on("close", function () {
  let answer = -1; // 답을 저장할 변수를 초기값 -1로 지정

  for (let i = Math.floor(N / 5); i >= 0; i--) { // 5kg 봉지부터 최대한 많이 들고 가는 방법을 시도
    let j = N - i * 5; // 남은 설탕의 양 계산

    if (j % 3 === 0) { // 3kg 봉지로 채울 수 있는지 확인
      answer = i + j / 3; // 채울 수 있다면 5kg 봉지 수와 3kg 봉지 수를 더해서 답을 계산
      break; // 최대한 적은 봉지를 들고 가야하므로 답을 구하면 바로 break
    }
  }

  console.log(answer); // 답을 출력
});
