"use strict";
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
var day1 = Days.Thu;
console.log(day1); //4,枚举默认从0开始
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 99] = "Blue";
    Colors[Colors["Yellow"] = 5] = "Yellow";
})(Colors || (Colors = {}));
console.log(Colors.Red); //0
console.log(Colors.Blue); //99
console.log(Colors.Yellow); //5
