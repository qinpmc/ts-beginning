function createAry(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createAry(3, 9)); // [9, 9, 9]
console.log(createAry(5, "x")); //["x", "x", "x", "x", "x"]
// 多个泛型类型
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([1, "-1"])); // ["-1", 1]
