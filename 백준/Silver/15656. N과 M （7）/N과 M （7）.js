function solve(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  const numbers = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const answer = [];

  const backtracking = (curr) => {
    if (curr.length >= m) {
      answer.push(curr.join(" "));
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      backtracking([...curr, numbers[i]]);
    }
  };

  backtracking([]);

  console.log(answer.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
