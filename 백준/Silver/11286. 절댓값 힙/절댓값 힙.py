import sys
import heapq

# 제출 전 주석처리 !!
#sys.stdin = open("input.txt","r")

N = sys.stdin.readline().rstrip()
hq = []

for i in range(int(N)):
    num = int(sys.stdin.readline().rstrip())
    
    if num == 0:
        if len(hq) > 0:
            print(heapq.heappop(hq)[1])
        else:
            print(0)
    else:
        heapq.heappush(hq,(abs(num),num))
