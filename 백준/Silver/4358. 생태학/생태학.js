function solve(input) {
  const treeDic = {};
  let totalCount = 0;

  for (let i = 0; i < input.length; i++) {
    const treeName = input[i];

    if (treeDic[treeName]) {
      treeDic[treeName] += 1;
    } else {
      treeDic[treeName] = 1;
    }

    totalCount++;
  }

  const sortedTreeArr = Object.entries(treeDic)
    .sort()
    .map((el) => [el[0], ((el[1] * 100) / totalCount).toFixed(4)].join(" "));
  console.log(sortedTreeArr.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
