class Q {
    constructor() {
        this.q = [];
        this.head = 0;
    }
    push(x) {
        this.q.push(x);
    }
    pop() {
        return this.q[this.head++] ?? null;
    }
    front() {
        return this.q[this.head] ?? null;
    }
    size() {
        return this.q.length - this.head;
    }
}

var RecentCounter = function () {
    this.q = new Q();
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    const [a, b] = [t - 3000, t];
    this.q.push(t);
    let f = this.q.front();
    while (f !== null && f < a) {
        this.q.pop();
        f = this.q.front();
    }

    return this.q.size();
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */