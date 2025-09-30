function solve(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const seq = input[1].split(" ").map(Number);

  let l = 0;
  let r = 0;
  let even = 0;
  let odd = 0;
  let answer = 0;

  const isEven = (num) => {
    if (num % 2 === 0) return true;
    else return false;
  };

  while (r < N && l <= r) {
    if (odd > K) {
      if (isEven(seq[l])) even--;
      else odd--;
      l++;
      continue;
    }

    if (isEven(seq[r])) even++;
    else odd++;
    answer = Math.max(answer, even);
    r++;
  }

  console.log(answer);
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);