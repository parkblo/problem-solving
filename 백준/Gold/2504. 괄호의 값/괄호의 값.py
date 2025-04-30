import sys
from collections import deque

# 제출 시 주석 처리 필요
#sys.stdin = open("input.txt","r")

string = sys.stdin.readline().rstrip()
stack = deque([]);

for ch in string:
    if ch == '(' or ch == '[':
        stack.append(ch)
    elif ch == ')' or ch == ']':
        # 닫는 경우에 검사 시작
        target = '(' if ch == ')' else '['
        multi_val = 2 if ch == ')' else 3
        tmp = []

        # pop하며 값 임시 저장 (일치하는 괄호 완성까지)
        flag = False
        while len(stack) > 0:
            val = stack.pop()
            if val == target:
                flag = True
                break
            tmp.append(val)

        if flag == False:
            print(0)
            sys.exit(0)

        # 임시 저장된 값 계산/유효성검사
        sum_val = 0
        for val in tmp:
            if isinstance(val,int):
                sum_val += val
            else:
                print(0)
                sys.exit(0)
        

        # 곱하기 연산
        if sum_val == 0:
            sum_val = multi_val
        else:
            sum_val *= multi_val

        # 완성된 값을 stack에 추가
        stack.append(sum_val)

# 남아있는 숫자들 더하기 연산
sum_val = 0
for val in stack:
    if isinstance(val,int):
        sum_val += val
    else:
        print(0)
        sys.exit(0)

print(sum_val)