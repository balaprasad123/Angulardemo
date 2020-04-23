"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var teacher = /** @class */ (function () {
    function teacher(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    teacher.prototype.dispay = function () {
        console.log(" id :" + this.id + " name :" + this.name + " salary :" + this.salary);
    };
    return teacher;
}());
exports.teacher = teacher;
var studnet = /** @class */ (function (_super) {
    __extends(studnet, _super);
    function studnet() {
        return _super.call(this, 1, "bala aala", 888555) || this;
    }
    return studnet;
}(teacher));
exports.studnet = studnet;
var ba = new studnet();
ba.dispay();
