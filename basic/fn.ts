function test1(x: number, y: number) :string{
  return (x+y).toString();
}

// let mySum = function(x: number, y: number): number {
//   return x + y;
// }
/**
 * 上面的函数表达式，mySum的类型是通过赋值操作进行类型推论出来的
 * 如果想要自定义mySum的类型，就要如下的写法，其中=>与es6中箭头函数不是一个东西
 * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 */
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

/**
 * 可选参数
 * 必须放在必须参数后面
 * 有默认值的参数被认定为可选参数，没有必须放在最后的限制
 */
function test2(p1: string, p2: string = '111', p3?: string, p4?: string) {}

/**
 * ...rest,代表剩余参数，放在最后
 */
function test3(p1: string, ...rest: any[]) {
  console.log(rest);
}
test3("1", "2", "3", "4");

/**
 * 重载
 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else{
        return x.split('').reverse().join('');
    }
}