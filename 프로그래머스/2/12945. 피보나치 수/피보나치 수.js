function solution(n) {
    let F0=0;
    let F1=1;
    let answer=0;
    
    for(let i = 2; i <= n; i++){
        answer = (F0 + F1) % 1234567;
        F0 = F1;
        F1 = answer;
    }
    return answer
}