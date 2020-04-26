// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

//解法一：暴力解决
var isAnagram = function(s, t) {
        var s1 = s.slitp('').sort().join()
        var t1 = t.slitp('').sort().join()
        return s1===t1
};

//解法二 ：使用map
var isAnagram = function(s, t) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
      const getMap = map.get(s[i])
      if (!getMap) {
        map.set(s[i], 1)
      } else {
        map.set(s[i], getMap + 1)
      }
    }
  
    for (let i = 0; i < t.length; i++) {
      const getMap = map.get(t[i])
      if (getMap === 1) {
        map.delete(t[i])
      } else if (getMap) {
        map.set(t[i], getMap - 1)
      } else {
        map.set(t[i], 1)
      }
    }
  
    if (map.size) {
      return false
    } else {
      return true
    }
  };
