function solution(arr) {
    const result = arr.filter((value, index) => value !== arr[index + 1]);
    return result
}