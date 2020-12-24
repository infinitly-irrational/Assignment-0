function sumOfAllEvenNumbers(nums) {
  let even=0;

  for (let i=0; i < nums.length; i++){
      if (nums[i] % 2 == 0)
            even++;
  }
  return even;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;