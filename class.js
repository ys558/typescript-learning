"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 普通类：
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三');
p.run(); //张三
console.log(p.getName()); //张三
p.setName('李四');
console.log(p.getName()); //李四
// 2. 继承： extends, super
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return "\u7236\u7C7B\u7684run\u65B9\u6CD5\uFF1A" + this.name + "\u5728\u8FD0\u52A8";
    };
    return Person2;
}());
// var p2 =new Person2('zhangsan');
// alert(p2.run())
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(name) {
        // 初始化父类的构造函数：super拿了上面的name属性
        return _super.call(this, name) || this;
    }
    A.prototype.run = function () {
        return "\u5B50\u7C7B\u7684run\u65B9\u6CD5\uFF1A" + this.name + "\u5728\u8FD0\u52A8";
    };
    return A;
}(Person2));
var A2 = new A('lisi');
// 子类有和父类一样的方法：则先执行子类的方法，如果没有，再执行父类的方法：
console.log('继承：', A2.run()); //继承： 子类的run方法：lisi在运动 
// 3. 类的修饰符：
// public 
// protected 当前类和其子类可以访问，外部无法访问
// private 只有当前类可以访问
// 不加修饰符，默认是public
var Person3 = /** @class */ (function () {
    function Person3(name, age, hehe) {
        this.name = name;
        this.age = age;
        this.hehe = hehe;
    }
    Person3.prototype.run = function () {
        return "\u7236\u7C7B\u7684run\u65B9\u6CD5\uFF1A" + this.hehe + ", hehe\u662F\u7236\u7C7B\u91CC\u7684\u79C1\u6709\u65B9\u6CD5\uFF0C\u53EA\u6709\u7236\u7C7B\u81EA\u5DF1\u80FD\u8C03\u7528";
    };
    return Person3;
}());
var A3 = /** @class */ (function (_super) {
    __extends(A3, _super);
    function A3(name, age, hehe) {
        return _super.call(this, name, age, hehe) || this;
    }
    A3.prototype.run = function () {
        // 如果下面加上：${this.hehe}则会报错
        return "\u5B50\u7C7B\u7684run\u65B9\u6CD5\uFF1A" + this.name + ", " + this.age;
    };
    return A3;
}(Person3));
var P1 = new Person3('lisi', 33, 'hehe');
console.log(P1.run());
var B = new A3('哈哈', 2344, 'hehe');
console.log(B.run());
