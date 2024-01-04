function solution(arr) {
    let number=Number.POSITIVE_INFINITY;
    let idx=0;
    
    for(let i=0; i<arr.length; i++){
        if(arr.length === 1){
                return [-1]; 
            }else if(arr[i]<number){
                number=arr[i]
                idx=i
            } 
    }
    
    arr.splice(idx,1)
    return arr 
}