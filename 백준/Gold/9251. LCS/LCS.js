function solve(input) {
  const str1 = input[0].split("");
  const str2 = input[1].split("");

  const dp = Array.from({ length: str1.length + 1 }, () =>
    new Array(str2.length + 1).fill(0)
  );

  // 초기화 과정 (dp 계산을 위한 padding 부여)
  str1.unshift(null);
  str2.unshift(null);

  // dp 연산
  for (let rowIndex = 1; rowIndex < dp.length; rowIndex++) {
    for (let colIndex = 1; colIndex < dp[rowIndex].length; colIndex++) {
      if (str1[rowIndex] === str2[colIndex]) {
        dp[rowIndex][colIndex] = dp[rowIndex - 1][colIndex - 1] + 1;
      } else {
        dp[rowIndex][colIndex] = Math.max(
          dp[rowIndex - 1][colIndex],
          dp[rowIndex][colIndex - 1]
        );
      }
    }
  }

  console.log(dp[str1.length - 1][str2.length - 1]);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
