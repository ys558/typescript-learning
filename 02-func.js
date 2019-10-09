"use strict";
var a = function () {
    return 'hehe';
};
console.log("定义函数要声明返回值，没返回值声明void", a());
var b = function (name, age, married) {
    if (age === void 0) { age = 30; }
    return "\u4F20\u503C\u9700\u8981\u58F0\u660E\uFF1A\n    \u6211\u53EB" + name + "\uFF0C\n    \u5E74\u9F84" + age + "\uFF0C" + married;
};
console.log(b('zs', 20));
