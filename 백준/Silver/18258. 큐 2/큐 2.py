from collections import deque
import sys

dq = deque([])

n = int(sys.stdin.readline().rstrip())

for i in range(n):
    cmd = sys.stdin.readline().rstrip().split(" ")
    if (cmd[0] == "push"):
        dq.append(cmd[1])
    elif (cmd[0] == "front"):
        if (len(dq)!=0):
            print(dq[0])
        else:
            print(-1)
    elif (cmd[0] == "back"):
        if (len(dq)!=0):
            print(dq[len(dq)-1])
        else:
            print(-1)
    elif (cmd[0] == "size"):
        print(len(dq))
    elif (cmd[0] == "empty"):
        print(1 if len(dq)==0 else 0)
    elif (cmd[0] == "pop"):
        if (len(dq)!=0):
            print(dq.popleft())
        else:
            print(-1)