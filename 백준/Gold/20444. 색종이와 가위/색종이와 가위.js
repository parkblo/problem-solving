function solve(input) {
  const [nRaw, kRaw] = input[0].split(" ");
  const n = BigInt(nRaw);
  const k = BigInt(kRaw);

  let l = 0n;
  let r = n;
  let flag = false;

  while (l <= r) {
    const rowCut = (l + r) / 2n;
    const pieces = (rowCut + 1n) * (n - rowCut + 1n);

    if (pieces === k) {
      flag = true;
      break;
    } else if (pieces < k) {
      l = rowCut + 1n;
    } else {
      r = rowCut - 1n;
    }
  }

  console.log(flag ? "YES" : "NO");
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
