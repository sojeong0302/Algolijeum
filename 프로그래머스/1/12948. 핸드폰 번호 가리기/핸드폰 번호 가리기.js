function solution(phone_number) {
    let arr = phone_number.split("");
    let number = arr.slice(-4).join("");
    let star=""
    
    for(let i = 0; i<phone_number.length-4; i++){
        star+="*"
    }
    
    return star+number;
}
