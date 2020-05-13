

// 给定一个可包含重复数字的序列，返回所有不重复的全排列。
//
// 示例:
//
//     输入: [1,1,2]
// 输出:
//     [
//         [1,1,2],
//         [1,2,1],
//         [2,1,1]
//     ]

    var permuteUnique = function(nums) {
    var res=new Set();
    var flag=new Set();
    var tem=[];
    backtrace(nums,flag,tem);

    function backtrace( nums ,flag ,tem){
        if(tem.length == nums.length)   return res.add(tem.join(" "));
        for(var i = 0 ; i < nums.length ; i++ ){
            if(!flag.has(i)){
                flag.add(i);
                backtrace(nums ,flag ,[...tem, nums[i]] );
                flag.delete(i);
            }
        }
    }
    var ret=[];
    for(let v of res){
        ret.push(v.split(" "));
    }

    return ret;
};