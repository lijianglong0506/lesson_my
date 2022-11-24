function createPhoneNumber(numbers){
    // return '('+numbers[0]+numbers[1]+numbers[2]+') '+numbers[3]+numbers[4]+numbers[5]+'-'+numbers
    // return '(${numbers[0]}${numbers[1]}${numbers[2]})'
   
    //join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的
    const nums = numbers.join('');
    const a = nums.substr(0,3);
    const b = nums.substr(3,3);
    const c = nums.substr(6,4);
    console.log('(' + a +') ' + b + '-' +c);

}
//(123) 456-789
createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

let name = '李江龙'
//字符串模版
let word = 'hello,${name}.'
console.log(word);