var global_num = 12; //gloabale variable
var prasad = /** @class */ (function () {
    function prasad() {
        this.num_val = 13; //class variable
    }
    prasad.prototype.balaNum = function () {
        var local_num = 15;
    };
    prasad.val = 10; //static field
    return prasad;
}());
console.log("globale num" + global_num);
console.log(prasad.val);
var obj = new prasad();
console.log("Gloable num" + obj.num_val);
