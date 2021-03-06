// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
//  
//
// 示例：
//
// s = "leetcode"
// 返回 0
//
// s = "loveleetcode"
// 返回 2

var firstUniqChar = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let count = map.get(s[i]) || 0;
        map.set(s[i], count + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }
    return -1;
};

