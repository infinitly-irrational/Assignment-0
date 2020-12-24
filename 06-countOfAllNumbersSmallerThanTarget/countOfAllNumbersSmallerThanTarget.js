function countOfAllNumbersSmallerThanTarget(nums, target) {
 
  let x = 0;

  for (let i=0; i < nums.length; i++){

    if (nums[i] < target)
          x++;
  }
  return x;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;