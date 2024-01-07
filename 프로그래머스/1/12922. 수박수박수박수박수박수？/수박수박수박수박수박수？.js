function solution(n) {
    let result="";
    if(n%2===0){
        for(let i=0; i<n/2; i++){
            result+="수박";
        }
    }else{
        for(let i=0; i<n;i++){
            if(i%2===0){
                result+="수";
            }else{
                result+="박";
            }
        }
    }
    return result;
}