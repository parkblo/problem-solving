def solution(n, lost, reserve):
    lost.sort()
    
    for num in lost[:]:
        if num in reserve:
            reserve.remove(num)
            lost.remove(num)
    
    for num in lost[:]:
        if num-1 in reserve:
            reserve.remove(num-1)
            lost.remove(num)
        elif num+1 in reserve:
            reserve.remove(num+1)
            lost.remove(num)
    
    return n-len(lost)