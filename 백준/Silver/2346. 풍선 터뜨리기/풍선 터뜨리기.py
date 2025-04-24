import sys
from collections import deque

#sys.stdin = open("input.txt", 'r')

n = int(sys.stdin.readline().rstrip())
dq = deque(enumerate(map(int, sys.stdin.readline().rstrip().split(" "))))

ans = []

while dq:
    idx, paper = dq.popleft()
    ans.append(idx+1)

    if (paper > 0):
        dq.rotate(-(paper-1))
    else:
        dq.rotate(-(paper))

print(' '.join(map(str,ans)))