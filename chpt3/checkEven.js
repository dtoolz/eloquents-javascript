function checkEven (num){
     if(num===0){
         return true;
     } else if(num===1){
         return false;
     } else if (num<0) {
         return checkEven(-num);
     }
     else return checkEven(num-2);
}

console.log(checkEven(-2))