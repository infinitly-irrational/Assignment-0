function isPalindrome(word) {
  
  let reverse="";
  
  for (let i=word.length; i >= 0; i--){
          reverse+=word.charAt(i);
  }
  return reverse == word;
}

// Do not edit this line;
module.exports = isPalindrome;