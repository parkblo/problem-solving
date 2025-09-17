function solve(input) {
  const [N, M] = input.shift().split(" ").map(BigInt);
  const desks = input.map(BigInt);

  let left = 1n;
  let right = 10n ** 9n * M;

  while (left <= right) {
    const mid = (left + right) / 2n;

    let totalCount = 0n;
    for (let i = 0; i < desks.length; i++) {
      totalCount += mid / desks[i];
    }

    if (totalCount >= M) {
      right = mid - 1n;
    } else {
      left = mid + 1n;
    }
  }
  console.log(left.toString());
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
