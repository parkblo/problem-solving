function solve(input) {
  const S = Number(input[0]);
  let sum = 0;
  let i;
  for (i = 1; i <= S; i++) {
    sum += i;
    if (sum > S) break;
  }
  console.log(i - 1);
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
