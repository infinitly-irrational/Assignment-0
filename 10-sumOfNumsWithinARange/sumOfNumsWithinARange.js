function sumOfNumsWithinARange(nums, start, end) {
  let x=0;

  for (let i=0; i < nums.length; i++){
      if (nums[i] >= start && nums[i] <= end)
          x++;
  }
    return x;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;