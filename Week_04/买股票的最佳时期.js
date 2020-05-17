// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
//
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
//
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

var maxProfit = function(prices) {
    var profit = 0;
    for(var i=1;i<prices.length;i++){
        var tmp  = prices[i]-prices[i-1]
        if (tmp>0) profit+=tmp;
    }
    return profit
};