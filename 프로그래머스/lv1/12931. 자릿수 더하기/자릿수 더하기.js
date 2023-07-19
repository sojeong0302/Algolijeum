function solution(n)
{
    let str=n.toString();
    var answer = 0;
    for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i], 10); // 문자를 정수로 변환
    answer += digit;
  }
    return answer;
}

let n=0;