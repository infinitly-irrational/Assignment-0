class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

 
    binarySearch(nums, target) {
    
        if (nums.length == 1){
          return nums[0] == target;
        }

        let mid= Math.floor(nums.length/2);

      if (nums[mid] == target)
            return true;
          
  
        if (target > nums[mid]){
          return binarySearch(nums.slice(mid), target);
        }
  
        else if (target < nums[mid]){
              return binarySearch(nums.slice(0,mid), target);
        }
        
    
    }

  }
  
  

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;