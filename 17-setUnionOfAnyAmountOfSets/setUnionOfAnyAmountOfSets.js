function setUnionOfAnyAmountOfSets(...args) {
 
  let union=new Set();

  for (let i=0; i < args.length; i++){
        for (let x of args[i]){
            if (union.has(x) == false){
                  union.add(x);
            }
        }
    }
                
  
          return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;