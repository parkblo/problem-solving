function solve(input) {
  const n = Number(input.shift());
  const ALL_VIS = (1 << n) - 1;
  const path = input.map((v) => v.split(" ").map(Number));
  const START_NODE = 0;
  const dp = Array.from({ length: n }, () => new Array(ALL_VIS + 1).fill(0));

  function tsp(curr, vis) {
    if (vis === ALL_VIS) {
      if (path[curr][START_NODE] > 0) {
        return path[curr][START_NODE];
      }
      return Infinity;
    }

    if (dp[curr][vis] !== 0) {
      return dp[curr][vis];
    }

    dp[curr][vis] = Infinity;

    for (let i = 0; i < n; i++) {
      if (path[curr][i] === 0) continue;
      if (vis & (1 << i)) continue;
      const newVis = vis | (1 << i);
      const result = tsp(i, newVis);
      if (result === Infinity) continue;
      dp[curr][vis] = Math.min(dp[curr][vis], path[curr][i] + result);
    }

    return dp[curr][vis];
  }

  const result = tsp(START_NODE, 1 << START_NODE);
  console.log(result === Infinity ? 0 : result);
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
