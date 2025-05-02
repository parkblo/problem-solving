import sys
import heapq

# 제출 전 주석처리 !!
#sys.stdin = open("input.txt","r")

q = []
output = []
N = sys.stdin.readline().rstrip()

for i in range(int(N)):
    input = int(sys.stdin.readline().rstrip())

    if input == 0:
        if len(q) > 0:
            max = heapq.heappop(q)
            output.append(-max)
        else:
            output.append(0)
    else:
        heapq.heappush(q,-input)


print('\n'.join(map(str,output)))