function sumOfMinimumAndMaximum(nums) {
  let large =nums[0];
  let small = nums[0];

  
  for (let i=0; i < nums.length; i++){
        if (nums[i] <= small)
            small=nums[i]
        if (nums[i] >= large)
             large=nums[i];
}


  return small + large;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;