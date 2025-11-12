function solve(input) {
  const n = Number(input.shift());
  const ar = input[0].split(" ").map(Number);
  const obj = {};

  for (const num of ar) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }

  let ans = -1;
  for (const [key, val] of Object.entries(obj)) {
    if (Number(key) === val) {
      ans = Math.max(ans, val);
    }
  }

  if (!obj[0]) {
    ans = Math.max(ans, 0);
  }

  console.log(ans);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
