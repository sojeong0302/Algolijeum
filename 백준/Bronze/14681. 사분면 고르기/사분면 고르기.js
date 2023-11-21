const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [A, B] = input;

    if (A > 0 && B > 0) {
        console.log("1");
    } else if (A < 0 && B > 0) {
        console.log("2");
    } else if (A < 0 && B < 0) {
        console.log("3");
    } else if (A > 0 && B < 0) {
        console.log("4");
    }
    process.exit();
});