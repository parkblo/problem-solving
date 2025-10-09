// 제출 전 filePath 확인 필수!

function solve(input) {
  const n = Number(input[0]);
  const memo = new Array(n).fill(0);

  memo[0] = 1;
  memo[1] = 3;

  for (let i = 2; i < n; i++) {
    memo[i] = (memo[i - 2] * 2 + memo[i - 1]) % 10_007;
  }

  console.log(memo[n - 1]);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
