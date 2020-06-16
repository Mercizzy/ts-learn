"use strict";
//赋值的时候，变量的形状必须和接口的形状保持一致。
var p1 = {
    name: 'p1',
    age: 25
};
var p2 = {
    name: 'p2'
};
var p3 = {
    name: 'p3',
    age: 22,
    gender: 'male'
};
var p4 = {
    name: 'p4',
    age: 11
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
    };
    return Dog;
}());
