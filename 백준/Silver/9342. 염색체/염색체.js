function solve(input) {
  const n = Number(input.shift());
  const infected = ["A", "B", "C", "D", "E", "F"];

  for (let i = 0; i < n; i++) {
    const currStr = input[i];
    let isinfected = true;
    let currComboChar = "A";

    for (let j = 0; j < currStr.length; j++) {
      const currChar = currStr[j];
      if (j === 0) {
        if (!infected.includes(currChar)) {
          isinfected = false;
          break;
        }
      } else if (currComboChar === "C") {
        if (!infected.includes(currChar)) {
          isinfected = false;
          break;
        }
        if (j !== currStr.length - 1) {
          isinfected = false;
          break;
        }
      } else {
        if (currChar !== currComboChar) {
          if (currChar === "F" && currComboChar === "A") {
            currComboChar = "F";
          } else if (currChar === "C" && currComboChar === "F") {
            currComboChar = "C";
          } else {
            isinfected = false;
            break;
          }
        }
      }
    }

    if (isinfected) {
      console.log("Infected!");
    } else {
      console.log("Good");
    }
  }
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
