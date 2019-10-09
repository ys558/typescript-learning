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
function printName(name) {
    console.log(name.firstName + "+" + name.secondName);
}
var obj = {
    age: 20,
    firstName: 'hehe',
    secondName: 'haha'
};
printName(obj);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange =
        function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                console.log('success');
                if (config.dataType === 'json') {
                    console.log(JSON.parse(xhr.responseText).result);
                }
                else {
                    console.log(xhr.responseText);
                }
            }
        };
}
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
var md5 = function (key, value) {
    // 模拟操作：
    return key + value;
};
console.log(md5('name', 'zhangshan'));
var arr1 = ['hehe', 'jjjjj'];
console.log(arr1[1]);
var obj3 = { name: 'uuuuu', eee: 'kkkk' };
console.log(obj3['eee']);
// implements意为实现接口
var Dog2 = /** @class */ (function () {
    function Dog2(name) {
        this.name = name;
    }
    Dog2.prototype.eat3 = function () {
        console.log(this.name + "\u5403\u4E1C\u897F");
    };
    return Dog2;
}());
var d3 = new Dog2('小黑');
d3.eat3();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + "+code");
    };
    return Programmer;
}());
var Ren = /** @class */ (function (_super) {
    __extends(Ren, _super);
    function Ren(name) {
        var _this = 
        // 用super继承Programmer的属性
        _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Ren.prototype.eat = function () {
        return this.name + "\u559C\u6B22\u5403\u4E1C\u897F";
    };
    Ren.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    Ren.prototype.coding = function () {
        console.log(this.name + "\u5728\u5199\u4EE3\u7801");
    };
    return Ren;
}(Programmer));
var xiaoming = new Ren('小明');
xiaoming.coding();
