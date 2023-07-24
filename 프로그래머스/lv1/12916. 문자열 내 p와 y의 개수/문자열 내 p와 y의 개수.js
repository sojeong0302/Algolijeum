function solution(s) {
  let countP = 0;
  let countY = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (char === 'p') {
      countP++;
    } else if (char === 'y') {
      countY++;
    }
  }

  return countP === countY;
}