"use strict";
var exports ={};
exports.__esModule = true;
var stud = /** @class */ (function () {
    function stud(id, name, rollno) {
        this.id = id;
        this.name = name;
        this.rollno = rollno;
    }
    stud.prototype.getdata = function () {
        console.log("your id no :" + this.id + "name: " + this.name + "rollno:" + this.rollno);
    };
    return stud;
}());
exports.stud = stud;
var obj = new stud(1137, "Balaprasad", 123455);
obj.getdata();
