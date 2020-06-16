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
/* logProto1
logProto2
logMethod1
logMethod2
logparams1
logparams2
logClass2
logClass1 */
// 
function logClass1(target: any) {
  console.log('类装饰器1');
}
function logClass2(target: any) {
  console.log('类装饰器2');
}
function logProto1() {
  console.log('属性装饰器1');
  return function(p1: any, p2: any) {}
}
function logProto2() {
  console.log('属性装饰器2');
  return function(p1: any, p2: any) {}
}
function logMethod1() {
  console.log('方法装饰器1');
  return function(p1: any, p2: any, p3: any) {}
}
function logMethod2() {
  console.log('方法装饰器2');
  return function(p1: any, p2: any, p3: any) {}
}
function logParams1() {
  console.log('方法参数装饰器1');
  return function(p1: any, p2: any, p3: any) {}
}
function logParams2() {
  console.log('方法参数装饰器2');
  return function(p1: any, p2: any, p3: any) {}
}

@logClass1
@logClass2
class HttpClient {
  @logProto1()
  @logProto2()
  path: string | undefined

  @logMethod1()
  @logMethod2()
  getData(@logParams1() p1: any, @logParams2() p2: any) {}
}