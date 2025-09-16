function solve(input) {
  const [N, M] = input.shift().split(" ").map(BigInt);
  const A = input.map(BigInt);
  let [L, R] = [1n, 10n ** 9n * M];
  while (L < R) {
    const C = (L + R) / 2n;
    const S = A.reduce((a, b) => a + BigInt(C / b), 0n);
    if (S < M) L = C + 1n;
    else R = C;
  }
  console.log(R.toString());
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
