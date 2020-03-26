"use strict";
var createAry = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createAry(3, 'x'); // ['x', 'x', 'x']
