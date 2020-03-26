"use strict";
function f(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a);
    console.log(b);
}
//f({ a: "yes" }); // ok, default b = 0 , a ="yes"
//f(); // ok, default to {a: ""}, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
