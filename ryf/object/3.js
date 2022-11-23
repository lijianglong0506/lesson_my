// 生成对象
// 猫这个类的模板？
// var Cat = {
//     name: '',
//     color: '',
// }
// // 基于Object 对象
// var Cat1 = {};  //new Object
// Cat1.name = "大毛";
// Cat1.color = "黄色";
// // 封装起来哦
// var Cat2 = {};  
// Cat2.name = "二毛";
// Cat2.color = "黑色";
// // 函数  大写的，  类，
function Cat(name,color){
    this.name = name;
    this.color = color;
}
// 实例化的过程
var cat3 = new Cat('三毛', '灰');
var cat4 = new Cat('四毛', '绿');
console.log(cat3)
// console.log(cat4)


