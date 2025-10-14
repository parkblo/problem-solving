// 제출 전 filePath 확인 필수!

class Queue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.len = 0;
  }

  push(x) {
    this.q.push(x);
    this.len++;
  }

  pop() {
    if (this.head < this.q.length) {
      this.len--;
      return this.q[this.head++];
    }
    return -1;
  }

  size() {
    return this.len;
  }

  empty() {
    return this.len === 0 ? 1 : 0;
  }

  front() {
    if (this.head < this.q.length) {
      return this.q[this.head];
    }
    return -1;
  }

  back() {
    if (this.len > 0) {
      return this.q[this.q.length - 1];
    }
    return -1;
  }
}

function solve(input) {
  const n = Number(input.shift());
  const queue = new Queue();
  const log = [];

  for (const cmdString of input) {
    const [cmd, x] = cmdString.split(" ");
    if (cmd === "push") {
      queue.push(x);
    } else if (cmd === "pop") {
      log.push(queue.pop());
    } else if (cmd === "size") {
      log.push(queue.size());
    } else if (cmd === "empty") {
      log.push(queue.empty());
    } else if (cmd === "front") {
      log.push(queue.front());
    } else if (cmd === "back") {
      log.push(queue.back());
    }
  }

  console.log(log.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
