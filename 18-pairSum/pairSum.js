function pairSum(nums, target) {
  
    if (nums.length <=1)
        throw 'Error. Check array size';
       
     for (let i=0; i < nums.length; i++){
       for (let j=0; j < nums.length; j++){
                if (i == j)
                    continue;
                 if (nums[i]+nums[j] == target)
                        return true;   
       }
     }   
      return false;


}

// Do not edit this line;
module.exports = pairSum;