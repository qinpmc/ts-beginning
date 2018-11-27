var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch("thisistest", "is")); //true
