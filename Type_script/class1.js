var person = /** @class */ (function () {
    function person(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    person.prototype.dispaly = function () {
        console.log("This is the  your id: " + this.id + "  and  your name :" + this.name + " your salary is :" + this.salary);
    };
    return person;
}());
var obj = new person(1137, "Prasad", 80000);
obj.dispaly();
