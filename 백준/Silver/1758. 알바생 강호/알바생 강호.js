function solve(input) {
  console.log(
    input
      .slice(1)
      .map(Number)
      .sort((a, b) => b - a)
      .reduce((a, v, i) => {
        return (a += Math.max(v - i, 0));
      }, 0)
  );
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
