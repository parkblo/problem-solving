function solve(input) {
  const N = Number(input.shift());
  const rooms = input
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[0] - b[0];
    });

  let roomCnt = 0;
  let lastEnd = 0;
  for (const [start, end] of rooms) {
    if (lastEnd <= start) {
      lastEnd = end;
      roomCnt++;
    }
  }

  console.log(roomCnt);
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
