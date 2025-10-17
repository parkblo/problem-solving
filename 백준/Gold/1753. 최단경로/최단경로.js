// 제출 전 filePath 확인 필수!

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(x) {
    this.heap.push(x);
    this.heapifyUp();
  }

  heapifyUp() {
    let curr = this.heap.length - 1;

    while (curr > 1) {
      let parent = Math.floor(curr / 2);

      if (this.heap[parent][0] > this.heap[curr][0]) {
        this.swap(curr, parent);
        curr = parent;
      } else {
        break;
      }
    }
  }

  shift() {
    if (this.heap.length < 2) {
      return 0;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    this.swap(1, this.heap.length - 1);
    const ret = this.heap.pop();
    this.heapifyDown();
    return ret;
  }

  heapifyDown() {
    let curr = 1;

    const len = this.heap.length;

    while (curr < len) {
      let l = curr * 2;
      let r = curr * 2 + 1;
      let smallest = curr;

      if (l < len && this.heap[l][0] < this.heap[smallest][0]) {
        smallest = l;
      }

      if (r < len && this.heap[r][0] < this.heap[smallest][0]) {
        smallest = r;
      }

      if (smallest !== curr) {
        this.swap(smallest, curr);
        curr = smallest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    if (this.heap.length < 2) {
      return true;
    } else {
      return false;
    }
  }
}

function solve(input) {
  const [v, e] = input.shift().split(" ").map(Number);
  const k = Number(input.shift());
  const dist = new Array(v + 1).fill(Infinity);
  const adj = Array.from({ length: v + 1 }, () => []);
  const heap = new MinHeap(); // 로직수정하기

  // 1. 그래프 정보 생성
  for (const str of input) {
    const [u, v, w] = str.split(" ").map(Number);

    adj[u].push([v, w]);
  }

  dist[k] = 0;
  heap.push([0, k]);

  // 2. dijkstra
  while (!heap.isEmpty()) {
    const [currDist, currNode] = heap.shift();

    if (currDist > dist[currNode]) {
      continue;
    }

    for (const [v, w] of adj[currNode]) {
      const newDist = currDist + w;

      if (dist[v] > newDist) {
        dist[v] = newDist;
        heap.push([newDist, v]);
      }
    }
  }

  // 3. 출력
  const answer = dist.slice(1).map((v, i) => {
    if (v === Infinity) {
      return "INF";
    } else {
      return v;
    }
  });

  console.log(answer.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
