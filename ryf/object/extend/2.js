let cai = {     //对象， js没有类
    nickname: '东理第一情圣',
    sayHi(){
        console.log('hi');
    }
}

let aTao = {
    nickname: '广兰第一盲僧',
};
// console.log(aTao.__proto__);
// 拦截 __proto__ 任何一个对象都有的私有属性
aTao.__proto__ = cai;
console.log(aTao.nickname)