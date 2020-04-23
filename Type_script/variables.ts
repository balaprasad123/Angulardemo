var global_num=12     //gloabale variable
class prasad{
    num_val=13;     //class variable
    static val=10;       //static field

    balaNum():void{
        var local_num=15;
    }

}
console.log("globale num"+global_num);
console.log(prasad.val)
var obj=new prasad();

console.log("Gloable num"+obj.num_val);
