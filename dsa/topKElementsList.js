class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}

        for(let i= 0; i < nums.length; i++) {
            if(obj[nums[i]] === undefined) {
                obj[nums[i]] = 1
            } else {
                obj[nums[i]] = obj[nums[i]] + 1
            }
        }
      
        let freqArray = Object.entries(obj);
        freqArray.sort((a, b) => b[1] - a[1]);
        let result = [];
        for(let i = 0; i < k; i++) {
            result.push(parseInt(freqArray[i][0]));
        }

        return result;
    }
}
