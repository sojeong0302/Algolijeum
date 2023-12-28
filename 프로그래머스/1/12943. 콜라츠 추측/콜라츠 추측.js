function solution(num) {
    let i=0
    
    for(i; num!==1; i++){
        if(num%2===0){
            num/=2;
        }else{
            num=num*3+1;
        }
    }
    
    if(i>=500){
        return -1
    }else{
        return i;
    }   
}