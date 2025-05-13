function solve(input) {
  const [N, M] = input.shift().split(" ").map(Number);

  const adj = Array.from({ length: N + 1 }, () => []);
  const inDegree = new Array(N + 1).fill(0);
  const sem = new Array(N + 1).fill(1);
  const queue = [];

  for (let i = 0; i < M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    adj[a].push(b);
    inDegree[b]++;
  }

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const curr = queue.shift();

    for (const next of adj[curr]) {
      inDegree[next]--;
      sem[next] = Math.max(sem[next], sem[curr] + 1);

      if (inDegree[next] <= 0) {
        queue.push(next);
      }
    }
  }

  console.log(sem.slice(1).join(" "));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
