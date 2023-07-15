function solution(n, k) {
  let sum = n * 12000 + k * 2000;
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 10 === 0) {
      sum -= 2000;
    }
  }
  return sum;
}
