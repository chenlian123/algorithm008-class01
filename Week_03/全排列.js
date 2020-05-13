//
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
//
// 示例:
//
//     输入: [1,2,3]
// 输出:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]


    var permute = function (nums) {
        result = []
        nums.sort(function (a, b) {
            return a - b
        })
        find(nums, [])
        return result
    };

    let result = []

    function find(nums, templateList) {

        if (nums.length == 0) {
            result.push(templateList.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            templateList.push(nums[i])
            let copy = nums.slice()
            copy.splice(i, 1)
            find(copy, templateList)
            templateList.pop()
        }
    }