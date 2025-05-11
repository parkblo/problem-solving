import sys
import heapq
from collections import defaultdict

#FIXME - 제출 전 주석처리 하세요
#sys.stdin = open("input.txt","r");

T = int(sys.stdin.readline().rstrip())

for _ in range(T):
    maxHeap = []
    minHeap = []
    visited = defaultdict(int) # 핵심은 lazy deletion을 이용하는 것
    Q = int(sys.stdin.readline().rstrip())

    for _ in range(Q):
        cmd, num_str = sys.stdin.readline().rstrip().split(" ")
        num = int(num_str)

        if cmd == 'I':
            heapq.heappush(maxHeap,-num)
            heapq.heappush(minHeap,num)
            visited[num] += 1
        elif cmd == 'D':
            if num == 1: # 최댓값 삭제
                while maxHeap and visited[-maxHeap[0]] <= 0:
                    heapq.heappop(maxHeap)

                if maxHeap:
                    elem = -heapq.heappop(maxHeap)
                    visited[elem] -= 1
                
            elif num == -1: # 최소값 삭제
                while minHeap and visited[minHeap[0]] <= 0:
                    heapq.heappop(minHeap)

                if minHeap:
                    elem = heapq.heappop(minHeap)
                    visited[elem] -= 1
    
    while maxHeap and visited[-maxHeap[0]] <= 0:
        heapq.heappop(maxHeap)

    while minHeap and visited[minHeap[0]] <= 0:
        heapq.heappop(minHeap)

    if len(minHeap) <= 0 or len(maxHeap) <= 0:
        print("EMPTY")
    else:
        print(-maxHeap[0], minHeap[0])