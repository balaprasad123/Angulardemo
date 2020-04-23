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
    function teacher(salary) {
        this.salary = salary;
    }
    return teacher;
}());
var stud = /** @class */ (function (_super) {
    __extends(stud, _super);
    function stud() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    stud.prototype.display = function () {
        console.log("Teaacher's salary is :" + this.salary);
    };
    return stud;
}(teacher));
var prasad = new stud(45000);
prasad.display();
