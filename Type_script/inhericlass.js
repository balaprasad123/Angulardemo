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
var teacher = /** @class */ (function () {
    function teacher(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    teacher.prototype.dispaly = function () {
        console.log(" your id :" + this.id + "your name is :" + this.name + " teacher salary  is :" + this.salary);
    };
    return teacher;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super.call(this, 1, "prasad", 80000) || this;
    }
    student.prototype.assign = function () {
        console.log("Teacher assign below calss");
    };
    student.prototype.dis = function () {
        console.log(this.id + " Your  id  is :" + this.name + "your  name is:" + this.salary + "salary is");
    };
    return student;
}(teacher));
var bb = new student();
bb.assign();
bb.dis();
