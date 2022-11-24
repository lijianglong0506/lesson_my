//pop
//
const arr = [1,2,3]; 
//变量的类型是由值决定的
Array.prototype.pop = function(){
    //拿到最后的元素 返回
    let x = this[this.length-1]
    this[this.length-1] = null;
    this.length = this.length-1;
    return x;
}
console.log(arr.pop());
console.log(arr);