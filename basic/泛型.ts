function returnData<T>(str: T): T {
  return str
}

returnData<number>(1)   // 1
returnData<number[]>([1,2,3]) // [1, 2, 3]

class MinClass<T> {
  list: Array<T> = []

  add(value: T): void {
    this.list.push(value)
  }

  min() :T{
    let minNum = this.list[0]
    for(let i=1; i<this.list.length; i++) {
      if(minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }

    return minNum
  }
}

let m = new MinClass<number>()
 
interface Db<T> {
  list: Array<T>;
  add(value: T): boolean;
  delete(index: number): boolean;
  update(index: number, value: T): boolean;
  get(index: number): any;  
}

class MysqlDb<T> implements Db<T> {
  list: T[] = []
  add(value: T): boolean {
    this.list.push(value)
    return true
  }
  delete(index: number): boolean {
    throw new Error("Method not implemented.")
  }
  update(index: number, value: T): boolean {
    throw new Error("Method not implemented.")
  }
  get(index?: number): any {
    if(index === undefined) {
      return this.list
    }else {
      return this.list[index]
    }
  }
}

class User {
  name: string;
  age: number;
  constructor(params: {
    name: string,
    age: number
  }) {
    this.name = params.name
    this.age = params.age
  }
}

let user1 = new User({ name: 'zs', age: 20 })

let mysqlDb = new MysqlDb<User>()
mysqlDb.add(user1)
console.log(mysqlDb.get());
