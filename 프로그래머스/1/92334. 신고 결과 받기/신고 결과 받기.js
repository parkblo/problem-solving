function solution(id_list, report, k) {
    const answer = [];
    const reportHistory = {};
    const reportCounter = {};
    const mailCounter = {};
    
    for (const id of id_list) {
        reportHistory[id] = new Set();
        mailCounter[id] = 0;
    }
    
    for (const reportString of report) {
        const [from, to] = reportString.split(" ");
        reportHistory[to].add(from);
    }
    
    for (const [key, val] of Object.entries(reportHistory)) {
        if (val.size >= k) {
            for (const mailTo of Array.from(reportHistory[key])) {
                mailCounter[mailTo]++;
            }
        }
    }
    
    for (const val of Object.values(mailCounter)) {
        answer.push(val);
    }
    
    return answer;
}