var isPalindrome = function(x) {
    
  
    for(let  i=0, j= x.length -1 ; i < x.length ; i++, j--){
        console.log(`${x[i]} + ${x[j]}` );
     
         
            if(x[i] !== x[j]){
                return false
            }
            
        
       
    }
    return true;
};

console.log(isPalindrome("10"));