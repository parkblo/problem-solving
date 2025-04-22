import sys

rope = []
ret = 0

n = int(sys.stdin.readline().rstrip())

for i in range(n):
    a = int(sys.stdin.readline().rstrip())
    rope.append(a)

rope.sort()

for idx, val in enumerate(rope):
    w = (len(rope)-idx)*val
    ret = max(w,ret)

print(ret)