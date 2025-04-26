function solve(input) {
  const str = input[0].split("");
  const duck = ["q", "u", "a", "c", "k"];
  const cnt = [0, 0, 0, 0];
  let max = 0;
  let curr = 0;

  for (const ch of str) {
    for (let i = 0; i < duck.length; i++) {
      if (ch === duck[i]) {
        if (i === 0) {
          // 'q'인 경우(이전비교X)
          cnt[i]++;
          curr++;
          max = Math.max(max, curr);
        } else if (i >= 1 && i <= 3) {
          if (cnt[i - 1] > 0) {
            cnt[i]++;
            cnt[i - 1]--;
          } else {
            // 소리 순서가 안맞는 경우
            console.log(-1);
            return;
          }
        } else if (i === 4) {
          // 'k'인 경우
          if (cnt[3] <= 0) {
            console.log(-1);
            return;
          }
          cnt[i - 1]--;
          curr--;
        }
      }
    }
  }

  for (const c of cnt) {
    // 남아있는 배열 탐색
    if (c > 0) {
      console.log(-1);
      return;
    }
  }

  console.log(max);
  return;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
