"use strict";
// 普通类装饰器
/* function logClass(params: any) {
  // console.log(params);
  params.prototype.path = 'xxxxx'
}

@logClass
class HttpClient {
  [x: string]: any;
  constructor() {}

}

let http = new HttpClient()
console.log(http.path); */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 装饰器工厂（可传参）
// function logClass(params: string) {
//   return function(target: any) {
//     // console.log(target);
//     // console.log(params);
//     target.prototype.path = params
//   }
// }
// @logClass('hello world')
// class HttpClient {
//   [x: string]: any;
// }
// let http = new HttpClient()
// console.log(http.path);
// 属性装饰器
/* function logProto(params: string) {
  return function(target: any, attr: any) {
    // console.log(target);
    // console.log(attr);
    target[attr] = params
  }
}

class HttpClient {
  @logProto('www.baidu.com')
  path: string | undefined
}

let http = new HttpClient()
console.log(http.path ); */
// 方法装饰器
/* function logMethod(params: string) {
  return function(target: any, methodName: any, desc: any) {
    // console.log(target);
    // console.log(methodName);
    // console.log(desc);

    let oMethod = desc.value
    desc.value = function() {
      console.log('装饰过的getData');
      oMethod.apply(this)
    }
  }
}

class HttpClient {
  @logMethod('xxxx')
  getData() {
    console.log('未装饰的getData方法');
  }
}

let http = new HttpClient()
http.getData() */
// 方法的参数装饰器
/* function logParams(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    console.log(target);
    console.log(methodName);
    console.log(paramsIndex);

  }
}

class HttpClient {
  getData(@logParams('111') p1: any) {
    console.log(p1);
  }
}

let http = new HttpClient()
http.getData('222') */
// 装饰器的执行顺序
/* 属性装饰器1
属性装饰器2
方法装饰器1
方法装饰器2
方法参数装饰器1
方法参数装饰器2
类装饰器2
类装饰器1 */
// 
function logClass1(target) {
    console.log('类装饰器1');
}
function logClass2(target) {
    console.log('类装饰器2');
}
function logProto1() {
    console.log('属性装饰器1');
    return function (p1, p2) { };
}
function logProto2() {
    console.log('属性装饰器2');
    return function (p1, p2) { };
}
function logMethod1() {
    console.log('方法装饰器1');
    return function (p1, p2, p3) { };
}
function logMethod2() {
    console.log('方法装饰器2');
    return function (p1, p2, p3) { };
}
function logParams1() {
    console.log('方法参数装饰器1');
    return function (p1, p2, p3) { };
}
function logParams2() {
    console.log('方法参数装饰器2');
    return function (p1, p2, p3) { };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function (p1, p2) { };
    __decorate([
        logProto1(),
        logProto2()
    ], HttpClient.prototype, "path", void 0);
    __decorate([
        logMethod1(),
        logMethod2(),
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "getData", null);
    HttpClient = __decorate([
        logClass1,
        logClass2
    ], HttpClient);
    return HttpClient;
}());
