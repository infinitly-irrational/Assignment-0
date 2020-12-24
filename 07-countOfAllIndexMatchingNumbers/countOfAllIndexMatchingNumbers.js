function countOfAllIndexMatchingNumbers(nums) {
  let x=0;

  for (let i=0; i < nums.length; i++){
      if (nums[i]==i){
        x++;
      }
  }
  return x;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;