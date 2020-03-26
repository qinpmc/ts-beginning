const arrUnion: (number | string)[] = [1, "2", 3];
console.log(arrUnion);

// 存储对象类型的数组
const arrObj: { name: string }[] = [{ name: "zhangsan" }, { name: "lisi" }];
console.log(arrObj);

// alias 方式 类型别名
type User = { name: string };
const arrObj2: User[] = [{ name: "zhangsan" }, { name: "wangwu" }];
console.log(arrObj2);
