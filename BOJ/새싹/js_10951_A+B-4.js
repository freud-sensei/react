const input = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    console.log(A + B);
}