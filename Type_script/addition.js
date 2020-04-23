"use strict";
exports.__esModule = true;
var add = /** @class */ (function () {
    function add() {
    }
    add.prototype.getadd = function (a, b) {
        return a + b;
    };
    return add;
}());
exports.add = add;
var obj = new add();
var c = obj.getadd(10, 20);
console.log(c);
