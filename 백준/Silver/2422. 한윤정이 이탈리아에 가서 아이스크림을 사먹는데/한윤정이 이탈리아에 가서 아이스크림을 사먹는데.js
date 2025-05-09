function solve(input) {
  const [N, M] = input.shift().split(" ").map(Number);

  const badCombinations = Array.from({ length: N + 1 }, () =>
    Array(N + 1).fill(false)
  );

  for (let i = 0; i < M; i++) {
    const [u, v] = input[i].split(" ").map(Number);
    badCombinations[u][v] = true;
    badCombinations[v][u] = true;
  }

  let count = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      for (let k = j + 1; k <= N; k++) {
        if (
          badCombinations[i][j] ||
          badCombinations[i][k] ||
          badCombinations[j][k]
        ) {
          continue;
        }
        count++;
      }
    }
  }

  console.log(count);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
