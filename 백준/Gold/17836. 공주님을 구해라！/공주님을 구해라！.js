function solve(input) {
  const [N, M, T] = input.shift().split(" ").map(Number);
  const board = input.map((val) => val.split(" ").map(Number));
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const vis = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => new Array(2).fill(false))
  );
  // vis[x][y][0]: 검 없음, vis[x][y][1]: 검 있음
  let answer = Infinity;

  function validatePos(x, y, hasSword) {
    // x, y must be next pos
    if (x < 0 || y < 0) return false;
    if (x >= N || y >= M) return false;
    if (board[x][y] === 1 && hasSword === false) return false;
    if (vis[x][y][hasSword ? 1 : 0] === true) return false;
    return true;
  }

  function bfs() {
    const queue = [[0, 0, 0, false]];
    vis[0][0][0] = true;

    while (queue.length > 0) {
      const [curX, curY, curDepth, prevHasSword] = queue.shift();

      if (curDepth > T) continue;
      if (curX === N - 1 && curY === M - 1) {
        answer = Math.min(answer, curDepth);
        continue;
      }

      let currHasSword = false;
      if (prevHasSword === true) currHasSword = true;
      if (board[curX][curY] === 2) currHasSword = true;

      for (const [dirX, dirY] of dir) {
        const nextX = curX + dirX;
        const nextY = curY + dirY;

        if (validatePos(nextX, nextY, currHasSword) === false) {
          continue;
        }

        vis[nextX][nextY][currHasSword ? 1 : 0] = true;
        queue.push([nextX, nextY, curDepth + 1, currHasSword]);
      }
    }
  }

  bfs();

  if (answer === Infinity) {
    console.log("Fail");
  } else {
    console.log(answer);
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
