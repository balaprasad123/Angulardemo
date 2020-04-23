"use strict";
exports.__esModule = true;
var DataComp = /** @class */ (function () {
    function DataComp(id, name, phnumber) {
        this.id = id;
        this.name = name;
        this.phnumber = phnumber;
    }
    DataComp.prototype.dispaly = function () {
        console.log("id =" + this.id + "name is = " + this.name + "Ph Number =" + this.phnumber);
    };
    return DataComp;
}());
exports.DataComp = DataComp;
var atul = new DataComp(1, "atul araskar", 9768782949);
atul.dispaly();
