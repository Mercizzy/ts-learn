let arr: number[] | null;
arr = [11,22];
console.log(arr.length);
arr = null;
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// console.log(arr.length);

