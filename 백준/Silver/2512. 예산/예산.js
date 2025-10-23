function solve(input) {
  const need = input[1].split(" ").map(Number);
  const maxSum = Number(input[2]);

  let left = 0;
  let right = Math.max(...need);
  let answer = left;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const currSum = need.reduce((sum, val) => sum + (val > mid ? mid : val), 0);

    if (currSum > maxSum) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = mid;
    }
  }

  console.log(answer);
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
