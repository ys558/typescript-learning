var st = '111111';
var num1 = 222;
console.log('声明字符串：', st);
console.log('声明数字：', num1);
// ts定义array的几种方法：
var arr = [1, 2, 3, 4, 5];
console.log("定义array的几种方法：", arr);
var arr2 = [33, 4, 4, 5];
console.log("定义array的几种方法：", arr2);
var arr8 = ['hwirbd', 3, 45, 6];
console.log("定义array的几种方法：", arr8);
// 元组类型：给数组中每一个位置指定一个类型：少用
var arr3 = [33, 'hhhhh'];
console.log("元组：", arr3);
// 枚举类型：
var flag;
(function (flag) {
    flag[flag["blue"] = 1] = "blue";
    flag["red"] = "\u7EA2";
    flag["black"] = "black";
})(flag || (flag = {}));
var f = flag.red;
console.log("枚举：", f); // 红
var flag2;
(function (flag2) {
    flag2[flag2["blue"] = 0] = "blue";
    flag2[flag2["red"] = 1] = "red";
    flag2[flag2["black"] = 2] = "black";
})(flag2 || (flag2 = {}));
var f2 = flag2.black;
console.log("枚举：", f2); //2
// 一个变量可以定义多种类型：
var some;
some = 123;
console.log("\u4E00\u4E2A\u53D8\u91CF\u7684\u591A\u79CD\u7C7B\u578B\uFF1A" + some + ", \u4E3A" + typeof (some) + "\u7C7B\u578B\uFF0C");
// 任意类型：any,相当于没有指定类型：用于获取dom节点
var test = document.getElementById('box');
// null和undefined，一个元素可以不定义或不传：
var num;
console.log('null和undefined，', num);
// void: 方法没有返回值：
function run() { console.log('void声明，多用于没有返回值的方法'); }
run();
function run2() { return 6666; }
console.log(run2());
