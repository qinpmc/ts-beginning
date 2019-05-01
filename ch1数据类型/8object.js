create({ prop: 0 }); // OK
// create(42); // Error
var input = [1, 2];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
