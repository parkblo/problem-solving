// 제출 전 filePath 확인 필수!

function solve(input) {
  const n = Number(input[0]);
  const memo = new Array(n + 1);

  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 1;
  for (let i = 4; i <= n; i++) {
    memo[i] = Math.min(memo[i - 1] + 1, memo[i - 3] + 1);
  }

  if (memo[n] % 2 !== 0) console.log("SK");
  else console.log("CY");
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
