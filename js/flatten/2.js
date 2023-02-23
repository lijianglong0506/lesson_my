var arr = [1, [2, [3,4]], 5]; // 数组

function flatten(arr) {
    return arr.toString().split(',').map(item => +item)
        return +item
    }

console.log(flatten(arr));