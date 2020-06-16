"use strict";
function returnData(str) {
    return str;
}
returnData(1); // 1
returnData([1, 2, 3]); // [1, 2, 3]
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 1; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        this.list = [];
    }
    MysqlDb.prototype.add = function (value) {
        this.list.push(value);
        return true;
    };
    MysqlDb.prototype.delete = function (index) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.update = function (index, value) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (index) {
        if (index === undefined) {
            return this.list;
        }
        else {
            return this.list[index];
        }
    };
    return MysqlDb;
}());
var User = /** @class */ (function () {
    function User(params) {
        this.name = params.name;
        this.age = params.age;
    }
    return User;
}());
var user1 = new User({ name: 'zs', age: 20 });
var mysqlDb = new MysqlDb();
mysqlDb.add(user1);
console.log(mysqlDb.get());
