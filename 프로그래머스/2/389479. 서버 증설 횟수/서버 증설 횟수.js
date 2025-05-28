/*
    input
    m: 서버 추가가 필요한 인원 단위
    n: 증설된 서버
    k: 서버의 유효기간
    
    process
    1. 매 초를 나타내는 반복문 수행
    2. 플레이어 동시접속자수 확인
    3. 인원 / m을 통해 필요한 서버수 확인
    4. 현재 서버수가 일치하는지 확인
    5. 일치하지 않다면 필요한 만큼 서버 증설
    6. 증설 서버는 k 기간 끝난 후 사라진다.
    
    output
    최소 서버 증설 횟수 answer
    
    data structure
    - 시간 체크를 위해 서버 증설 시의 시점에 Array에 담는다.
*/

function solution(players, m, k) {
    var answer = 0;
    let addedServerQueue = []; // Element: 추가된 서버의 초
    
    for (let second=0; second<players.length; second++) {
        const currPlayers = players[second];
        const requiredServerNum = Math.max(0, Math.floor(currPlayers / m) - addedServerQueue.length);
        
        // 필요 시 서버 증설
        if (requiredServerNum > 0) {
            const newServerArray = new Array(requiredServerNum).fill(second);
            addedServerQueue = [...addedServerQueue, ...newServerArray]
            answer += newServerArray.length;
        }
        
        // 서버 반납
        while (addedServerQueue.length > 0) {
            const lastServerAddedSecond = addedServerQueue.shift()
            if (second - lastServerAddedSecond >= k - 1) {
                continue;
            } else {
                addedServerQueue.unshift(lastServerAddedSecond);
                break;
            }
        }
    }
    
    return answer;
}