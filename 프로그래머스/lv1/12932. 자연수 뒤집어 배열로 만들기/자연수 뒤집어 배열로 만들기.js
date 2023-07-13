function solution(n) {
    const digits = [];
    while (n > 0) {
        digits.push(n % 10); // n의 일의 자리 숫자를 배열에 추가
        n = Math.floor(n / 10); // n을 10으로 나눈 몫을 새로운 n으로 설정
    }
    return digits;
}