let nums = 0;
 for (let count=1; count<=100; count++){
     nums=nums+1;
     if(nums%3===0 && nums%5===0){
       console.log('fizzbuzz');
     } 
     else if(nums%5===0){
         console.log('buzz');
     }
     else if (nums%3 === 0){
         console.log('fizz')
     }
     else {
         console.log(nums)
     }
 }