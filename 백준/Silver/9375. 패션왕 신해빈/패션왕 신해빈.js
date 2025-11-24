function solve(input) {
  const T = Number(input.shift());
  const ret = [];

  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) !== NaN) {
      const n = Number(input[i]);
      if (n === 0) {
        ret.push(0);
        continue;
      }
      const obj = {};
      for (let j = i + 1; j < input.length && j <= i + n; j++) {
        const [name, type] = input[j].split(" ");
        if (obj[type]) obj[type] += 1;
        else obj[type] = 2;
      }
      i = i + n;
      let allcases = 1;
      for (const [key, val] of Object.entries(obj)) {
        allcases *= val;
      }
      allcases -= 1;
      ret.push(allcases);
    }
  }

  console.log(ret.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
