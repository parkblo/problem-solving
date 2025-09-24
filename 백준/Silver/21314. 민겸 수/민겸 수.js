function solve(input) {
  const mingyum = input[0].split("");

  let minRet = "";
  let maxRet = "";

  let mCnt = 0;
  for (const char of mingyum) {
    switch (char) {
      case "M":
        mCnt++;
        break;
      case "K":
        if (mCnt > 0) {
          minRet += "1";
          maxRet += "5";
          for (let i = 0; i < mCnt; i++) {
            if (i === mCnt - 1) {
              minRet += "5";
            } else {
              minRet += "0";
            }
            maxRet += "0";
          }
        } else {
          minRet += "5";
          maxRet += "5";
        }
        mCnt = 0;
        break;
      default:
        break;
    }
  }

  if (mCnt > 0) {
    minRet += "1";
    for (let i = 0; i < mCnt - 1; i++) {
      minRet += "0";
    }
    while (mCnt > 0) {
      maxRet += "1";
      mCnt--;
    }
  }

  console.log(maxRet);
  console.log(minRet);
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
