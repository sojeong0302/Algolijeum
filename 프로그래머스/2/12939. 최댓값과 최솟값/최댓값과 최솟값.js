function solution(s) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    let numbers = s.split(' ').map(Number);

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }

        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min + ' ' + max;

}
