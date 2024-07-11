class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b) => a-b)
        let flag = false;
        for(let i= 0; i < nums.length; i++) {
            if(nums[i] == nums[i+1]) {
                flag = true
            }
        }
         return flag
    }
   
}


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     const obj = {};
//    let flag = false;

//    for(let i = 0; i < nums.length; i++) {
//        if(obj[nums[i]]) {
//            flag = true;
//            break;
//        } else {
//            obj[nums[i]] = 1;
//        }
//    }

//    return flag;
// };
