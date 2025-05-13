function solve(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  const coords = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const findLeftIndex = (val) => {
    let left = 0;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (val <= coords[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

  const findRightIndex = (val) => {
    let left = 0;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (val < coords[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

  const ans = [];
  for (let i = 0; i < m; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    ans.push(findRightIndex(end) - findLeftIndex(start));
  }

  console.log(ans.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
