"use strict";
var st = '111111';
var num1 = 222;
console.log('声明字符串：', st);
console.log('声明数字：', num1);
// ts定义array的几种方法：
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr2 = [33, 4, 4, 5];
console.log(arr2);
var arr8 = ['hwirbd', 3, 45, 6];
console.log(arr8);
// 元组类型：给数组中每一个位置指定一个类型：
var arr3 = [33, 'hhhhh'];
console.log(arr3);
// 枚举类型：
var flag;
(function (flag) {
    flag[flag["blue"] = 1] = "blue";
    flag["red"] = "\u7EA2";
    flag["black"] = "black";
})(flag || (flag = {}));
var f = flag.red;
console.log(f); // 红
var flag2;
(function (flag2) {
    flag2[flag2["blue"] = 0] = "blue";
    flag2[flag2["red"] = 1] = "red";
    flag2[flag2["black"] = 2] = "black";
})(flag2 || (flag2 = {}));
var f2 = flag2.black;
console.log(f2); //2
// 任意类型：any,相当于没有指定类型：用于获取dom节点
var test = document.getElementById('box');
// null和undefined，一个元素可以不定义或不传：
var num;
console.log(num);
// void: 方法没有返回值：
function run() { console.log('111111'); }
run();
function run2() { return 6666; }
console.log(run2());
