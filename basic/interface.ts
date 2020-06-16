interface Person1 {
  name: string;
  age: number;
}

//赋值的时候，变量的形状必须和接口的形状保持一致。
let p1: Person1 = {
  name: 'p1',
  age: 25
}

//可选属性
interface Person2 {
  name: string;
  age?: number;
}
let p2 = {
  name: 'p2'
}

//任意添加属性
interface Person3 {
  name: string;
  age: number;
  [propName: string]: any;
  // [propName: string]: string;
  // [propName: string]: string | number;
}
let p3 = {
  name: 'p3',
  age: 22,
  gender: 'male'
}

//只读属性
interface Person4 {
  name: string;
  age: number;
  readonly id: string;
}
let p4 = {
  name: 'p4',
  age: 11
}
// p4.id = '111'
//只读属性的赋值只能在对对象的第一次赋值中

interface Animal{
  name: string;
  eat(str: string): void
}

class Dog implements Animal{
  name: string
  constructor(name: string){
    this.name = name
  }
  eat(): void {
    
  }
  
}