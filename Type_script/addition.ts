export class  add{

    getadd(a:number,b:number) {

        return a+b;
    }
     
}
var obj = new add();
var c =obj.getadd(10,20);
console.log(c);