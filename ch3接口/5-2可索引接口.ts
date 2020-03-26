//错误的示例
/* interface NumberDictionary {
  length: number; // 可以，length是number类型
  name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
  [index: string]: number;
} */

class Human {}

class Man extends Human {}

// 正确示例
interface NumberDictionary2 {
  [index: string]: Man;
  length: number; //
  name: string; //
}

let man1: NumberDictionary2 = {
  length: 2,
  name: "a",
  type: new Man()
};

console.log(man1);
