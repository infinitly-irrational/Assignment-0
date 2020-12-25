function frequencyCounter(word) {

  let obj ={};
for (let i=0; i < word.length; i++){
      for (j=0; j < word.length; j++){
            if (word.charAt(i) != word.charAt(j)){
                  obj[word.charAt(i)]=0;
            }}}

let count=0;

for (x in obj){
       count=0;
        for (let i=0; i < word.length; i++){
               if (x == word.charAt(i)) {
                    count++;
                    }
        obj[x]=count;
  }
      
  }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;