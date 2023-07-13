function solution(numbers) {
    let sum=0;
    let length=numbers.length;
    for(let i=0;i<length;i++){
        sum+=numbers[i];
    }
    sum=sum/length;
    return sum.toFixed(1);
}