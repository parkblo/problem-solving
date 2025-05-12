function solve(input) {
  const N = Number(input.shift());
  const machines = input
    .shift()
    .split(" ")
    .map(BigInt)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  let answer = 0;

  if (machines.length % 2 === 1) {
    const lastLoss = machines.pop();
    answer = lastLoss;
  }

  for (let i = 0; i < machines.length / 2; i++) {
    let lossSum = 0n;
    lossSum += machines[i];
    lossSum += machines[machines.length - 1 - i];
    answer = lossSum > answer ? lossSum : answer;
  }

  console.log(String(answer));
  return;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
