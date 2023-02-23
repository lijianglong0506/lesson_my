var twoSum = function(nums, target) {
    for(let i = 0, len = nums.length;i < len;i++){
        // 因为同一元素不允许重复出现，所以从i的下一位开始遍历
        for(let j = i + 1;j < len;j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // 所有样例都是有返回结果的，这里无所谓
    return [-1, -1];
};