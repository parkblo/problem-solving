import sys

# 제출 전 주석처리 !!
#sys.stdin = open("input.txt","r")

N = sys.stdin.readline().rstrip()

adj = [[] for _ in range(int(N)+1)]

for i in range(int(N)-1):
    a, b = map(int,sys.stdin.readline().rstrip().split(" "))
    adj[a].append(b)
    adj[b].append(a)

Q = sys.stdin.readline().rstrip()

for i in range(int(Q)):
    t, k = map(int,sys.stdin.readline().rstrip().split(" "))
    if t == 1:
        print("yes" if len(adj[k]) > 1 else "no") # root 혹은 leaf노드만 단절점
    elif t == 2:
        print("yes") # 트리에서 단절선이 안되는 경우는 없음.