class minHeap {
    constructor() {
        this.q = [];
    }
    
    swap(a,b) {
        [this.q[a], this.q[b]] = [this.q[b],this.q[a]];
    }
    
    push(x) {
        this.q.push(x);
        this.up();
    }
    
    pop() {
        const len = this.q.length;
        if (len === 0) return null;
        if (len === 1) return this.q.pop();
        
        const ret = this.q[0];
        this.q[0] = this.q.pop();
        this.down(0);
        return ret;
    }
    
    up() {
        let curr = this.q.length-1;
        
        while (curr > 0) {
            let parent = Math.floor((curr-1) /2);
            
            if (this.q[parent] > this.q[curr]) {
                this.swap(curr, parent);
                curr = parent;
            } else { break; }
        }
    }
    
    down(i) {
        let t = i;
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        const len = this.q.length;
        
        if (l < len && this.q[l] < this.q[t]) {
            t = l;
        }
        
        if (r < len && this.q[r] < this.q[t]) {
            t = r;
        }
        
        if (t !== i) {
            this.swap(i, t);
            this.down(t);
        }
    };
}

function solution(scoville, K) {
    let answer = 0;
    const h = new minHeap();
    
    for (const s of scoville) {
        h.push(s);
    }
    
    while (true) {
        const p1 = h.pop();
        
        if (p1 >= K) break;
        
        const p2 = h.pop();
        if (p2 === null) {
            return -1;
        }
        
        const newOne = p1 + (p2 *2); answer++;
        h.push(newOne);
    }
    
    return answer;
}