let str1: string = '111';
// str = 111;

let a1: any = '111';
a1 = 111;
console.log(a1.a.b);

//等价于
let a2;
a2 = '111';
a2 = 111;

//类型推断
let a3 = '111';
// a3 = 111;