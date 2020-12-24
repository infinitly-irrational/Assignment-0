function titleCaseEdit(title) {
    
let arr=title.split(" ");
let temp="";
for (let i=0; i<arr.length; i++){

  arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
  temp=temp+" "+ arr[i];
}

return temp;

}

// Do not edit this line;
module.exports = titleCaseEdit;