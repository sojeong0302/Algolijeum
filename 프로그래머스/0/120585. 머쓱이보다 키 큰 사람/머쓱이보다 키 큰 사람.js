function solution(array, height) {
    var answer = 0;
    answer = array.filter(val=> val>height).length
    return answer;
}