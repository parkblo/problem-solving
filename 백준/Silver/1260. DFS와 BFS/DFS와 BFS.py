import sys
#sys.stdin = open("input.txt","r")

n, m, v = map(int,input().split())

adj = [[0]*(n+1) for _ in range(n+1)]

for i in range (m):
    a,b = map(int, input().split())
    adj[a][b] = adj[b][a] = 1

visited1 = [0]*(n+1)
visited2 = [0]*(n+1)

def dfs(V):
    visited1[V] = 1
    print(V, end=' ')
    for i in range(1, n+1):
        if adj[V][i] == 1 and visited1[i] == 0:
            dfs(i)

def bfs(V):
    queue = [V]
    visited2[V] = 1
    while queue:
        V = queue.pop(0)
        print(V, end=" ")
        for i in range(1, n+1):
            if visited2[i] == 0 and adj[V][i] == 1:
                queue.append(i)
                visited2[i] = 1

dfs(v)
print()
bfs(v)