function solution(new_id) {
    var answer = '';
    let str = new_id;
    
    str = str.toLowerCase();
    console.log(str);
    
    const step2 = str.split("")
    const step2ret = [];
    for (let i=0; i<step2.length; i++) {
        const ch = step2[i];
        if ((ch.charCodeAt() >= 'a'.charCodeAt() && ch.charCodeAt() <= 'z'.charCodeAt()) || ch === '-' || ch === '_' || ch === '.' || (ch.charCodeAt() >= '0'.charCodeAt() && ch.charCodeAt() <= '9'.charCodeAt())) {
            step2ret.push(ch);
        }
    }
    str = step2ret.join('');
    console.log(str);
    
    const step3 = str.split("")
    const step3ret = [step3[0]];
    for (let i=1; i<step3.length; i++) {
        const ch = step3[i];
        if (step3[i-1] === '.' && ch === '.') {
            continue;
        }
        step3ret.push(ch);
    }
    str = step3ret.join('');
    console.log(str);
    
    if (str.length > 0) {
        if (str[0] === '.') {
            str = str.slice(1);
        }
        if (str[str.length-1] === '.') {
            str = str.slice(0,str.length-1);
        }
    }
    
    if (str.length === 0) {
        str = 'a';
    }
    
    if (str.length >= 16) {
        str = str.slice(0,15);
    }
    
    if (str[str.length-1] === '.') {
        str = str.slice(0,str.length-1);
    }
    
    while (str.length <=2) {
        str += str[str.length-1];
    }
    
    answer = str;
    
    return answer;
}