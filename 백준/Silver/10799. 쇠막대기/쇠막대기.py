import sys
from collections import deque

#sys.stdin = open("input.txt", "r")

iron = sys.stdin.readline().rstrip()
dq=deque([])

cnt=0

for idx, chr in enumerate(iron):
    if (chr == "("):
        # 레이저일 경우 생각
        if (idx != len(iron)-1 and iron[idx+1] == ")"):
            cnt += len(dq)
        else:
            dq.append('(')
    elif (chr == ")"):
        if (iron[idx-1] != "("):
            dq.pop()
            cnt += 1

print(cnt)