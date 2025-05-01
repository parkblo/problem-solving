import sys
from collections import deque

#sys.stdin = open("input.txt","r")

T = sys.stdin.readline().rstrip()

for t in range(int(T)):
    N, target = sys.stdin.readline().rstrip().split(" ")
    documents = sys.stdin.readline().rstrip().split(" ") # 중요도 정보
    count = 0

    q = deque(enumerate(documents))

    while len(q) > 0:
        idx, prior = q.popleft()
        if any(prior < p for i, p in q):
            q.append((idx, prior))
        else:
            count += 1
            if int(target) == int(idx):
                print(count)
                break
            
