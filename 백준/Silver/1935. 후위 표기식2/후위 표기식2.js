function solve(input) {
  const n = Number(input.shift());
  const str = input.shift().split("");
  const dic = {};
  const stack = [];

  let ch = "A".charCodeAt(0);
  for (let i = 0; i < input.length; i++) {
    const val = Number(input[i]);

    dic[String.fromCharCode(ch++)] = val;
  }

  for (const char of str) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      stack.push(dic[char]);
    } else {
      const second = stack.pop();
      const first = stack.pop();
      if (char === "*") {
        stack.push(first * second);
      } else if (char === "+") {
        stack.push(first + second);
      } else if (char === "-") {
        stack.push(first - second);
      } else if (char === "/") {
        stack.push(first / second);
      }
    }
  }
  console.log(stack[0].toFixed(2));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
