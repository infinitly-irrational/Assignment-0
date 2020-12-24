function sumOfAllOddNumbers(nums) {
  let odd=0;

  for (let i=0; i < nums.length; i++){
      if (nums[i] % 2 != 0)
            odd++;
  }
  return odd;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;