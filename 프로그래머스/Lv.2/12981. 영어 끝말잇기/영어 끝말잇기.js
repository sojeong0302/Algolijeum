function solution(n, words) {
    let usedWords = new Set();
    let prevWord = words[0];
    usedWords.add(prevWord);

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];

        if (usedWords.has(currentWord) || prevWord[prevWord.length - 1] !== currentWord[0]) {
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }

        usedWords.add(currentWord);
        prevWord = currentWord;
    }

    return [0, 0];
}