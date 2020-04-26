// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

//解法一：暴力排序
var groupAnagrams = function(strs) {
    var tmpCode = '';
       var hashMap = {};
       var result = [];
       for(var i = 0;i<strs.length;i++){
           tmpCode = strs[i].split('').sort().join('');
           if(hashMap[tmpCode]==undefined){
               hashMap[tmpCode] = [];
           }
           hashMap[tmpCode].push(strs[i]);
       }
       for(var key in hashMap){
           result.push(hashMap[key]);
       }
       return result;
   };