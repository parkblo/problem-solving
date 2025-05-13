function solve(input) {
  const [N, X] = input.shift().split(" ").map(Number);
  const visitors = input.shift().split(" ").map(Number);

  let left = 0;
  let right = 0 + X - 1;
  let maxVisitors = 0;
  let multiPeriods = 1;
  let currVisitors = 0;

  for (let i = left; i <= right; i++) {
    currVisitors += visitors[i];
  }
  maxVisitors = currVisitors;
  left++;
  right++;

  while (right < N) {
    currVisitors -= visitors[left - 1];
    currVisitors += visitors[right];

    if (currVisitors === maxVisitors) {
      multiPeriods++;
    } else if (currVisitors > maxVisitors) {
      maxVisitors = currVisitors;
      multiPeriods = 1;
    }

    left++;
    right++;
  }

  if (maxVisitors === 0) {
    console.log("SAD");
    return;
  }
  console.log(maxVisitors);
  console.log(multiPeriods);
  return;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
