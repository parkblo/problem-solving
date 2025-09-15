function solve(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const output = [];

  const f = (ar) => {
    if (ar.length >= M) {
      output.push(ar.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      ar.push(i);
      f(ar);
      ar.pop();
    }
  };

  f([]);

  console.log(output.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
