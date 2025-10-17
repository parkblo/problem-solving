class MinHeap {
  constructor() {
    this.heap = [null];
  }

  #swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(x) {
    this.heap.push(x);
    this.#heapifyUp();
  }

  #heapifyUp() {
    let curr = this.heap.length - 1;

    while (curr > 1) {
      const parent = Math.floor(curr / 2);

      if (this.heap[parent] > this.heap[curr]) {
        this.#swap(parent, curr);
        curr = parent;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length < 2) {
      return 0;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    this.#swap(this.heap.length - 1, 1);
    const val = this.heap.pop();
    this.#heapifyDown();
    return val;
  }

  #heapifyDown() {
    let curr = 1;
    const len = this.heap.length;

    while (curr < len) {
      let l = curr * 2;
      let r = curr * 2 + 1;
      let smaller = curr;

      if (l < len && this.heap[smaller] > this.heap[l]) {
        smaller = l;
      }

      if (r < len && this.heap[smaller] > this.heap[r]) {
        smaller = r;
      }

      if (smaller !== curr) {
        this.#swap(smaller, curr);
        curr = smaller;
      } else {
        break;
      }
    }
  }
}

function solve(input) {
  const heap = new MinHeap();
  const n = input.shift();
  const ret = [];

  for (const str of input) {
    const x = Number(str);
    if (x === 0) {
      ret.push(heap.remove());
    } else {
      heap.insert(x);
    }
  }

  console.log(ret.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
