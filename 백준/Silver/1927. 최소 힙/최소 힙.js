class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        break;
      }

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0); // why?

    return minValue;
  }

  heapifyDown(index) {
    let smallest = index;
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.heap.length;

    if (
      leftChildIndex < length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }
}

function solve(input) {
  const n = input.shift();
  const heap = new MinHeap();
  const ret = [];

  for (const num of input) {
    if (num === "0") {
      const val = heap.remove();
      if (val === null) ret.push(0);
      else ret.push(val);
    } else {
      heap.insert(Number(num));
    }
  }

  console.log(ret.join("\n"));
}

// == I/O ==
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solve(input);
