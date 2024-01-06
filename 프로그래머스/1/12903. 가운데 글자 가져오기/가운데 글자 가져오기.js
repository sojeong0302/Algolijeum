function solution(s) {
    let arr = s.split("");
    let idx = 0;

    if (arr.length % 2 === 1) {
        idx = Math.floor(arr.length / 2);
        return arr[idx];
    } else {
        idx = Math.floor(arr.length / 2) - 1;
        return arr.slice(idx, idx + 2).join("");
    }
}
