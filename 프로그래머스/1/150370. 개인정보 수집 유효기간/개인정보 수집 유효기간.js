function solution(today, terms, privacies) {
    const MONTH_NUM = 28
    const YEAR_NUM = 28*12
    const answer = [];
    const termNum = {};
    
    const [ty,tm,td] = today.split(".").map(Number);
    const todayNum = ty * YEAR_NUM + tm * MONTH_NUM + td;
    
    for (const termString of terms) {
        const [tName, tMonth] = termString.split(" ");
        termNum[tName] = Number(tMonth) * MONTH_NUM;
    }
    
    for (let i=0; i<privacies.length; i++) {
        const index = i+1;
        const [dateString, tName] = privacies[i].split(" ");
        const [py,pm,pd] = dateString.split(".").map(Number);
        const priNum = py * YEAR_NUM + pm * MONTH_NUM + pd;
        const endNum = priNum + termNum[tName];
        
        if (endNum <= todayNum) {
            answer.push(index);
        }
    }
    
    return answer;
}