/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
 let left = 0;
 let obj = {}

 for(let i = 0; i < s.length; i++) {
     let char = s[i]
    if(obj[char] >= left) {
        left = obj[char]+1;
    }
    obj[char] =  i;
    max = Math.max(max, i-left+1)
 }

return max
};


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let longest = 0;
//  let start = 0;
//  const charIndexMap = {};

//  for (let i = 0; i < s.length; i++) {
//    const char = s[i];
//    if (charIndexMap[char] >= start) {
//      start = charIndexMap[char] + 1;
//    }
//    charIndexMap[char] = i;
//    const currentLength = i - start + 1;
//    longest = Math.max(longest, currentLength);
//  }

//  return longest;
// };