function productOfAnyAmountOfNumbers(...args) {
  
    let x=1;
  for (let i=0; i < args.length; i++){
      x=x*args[i];
  }
  return x;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;