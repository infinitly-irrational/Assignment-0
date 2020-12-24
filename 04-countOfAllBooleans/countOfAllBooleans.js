function countOfAllBooleans(arr) {
 
  let x=0;
  for (let i= 0; i < arr.length; i++){
    if (typeof arr[i] === "boolean")
              x++;
  }

  return x;
}

// Do not edit this line;
module.exports = countOfAllBooleans;