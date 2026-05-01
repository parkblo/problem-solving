def f(interval, rocks, distance):
    cnt = 0
    rocks = [0] + rocks + [distance]
    prev = rocks[0]
    
    for i in range (1, len(rocks)):
        if rocks[i] - prev < interval:
            cnt += 1
        else:
            prev = rocks[i]
    
    return cnt

def solution(distance, rocks, n):
    left = 0
    right = distance
    rocks.sort()
    
    while left <= right:
        mid = (left + right) // 2
        cnt = f(mid, rocks, distance)
        if cnt > n:
            right = mid - 1
        else:
            left = mid + 1
    
    return left - 1