function solve(input) {
  const [K, N] = input.shift().split(" ").map(Number);
  const lines = input.map(Number);

  let l = 1;
  let r = Math.max(...lines);

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const partitions = lines.reduce((acc, cur) => {
      return acc + Math.floor(cur / mid);
    }, 0);

    if (partitions < N) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  console.log(r);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
