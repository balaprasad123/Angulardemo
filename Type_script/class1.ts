class person{
    id:number;
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary;


    }

    dispaly():void{
    console.log("This is the  your id: "+this.id+"  and  your name :"+this.name+" your salary is :"+this.salary);
    }
}
 var obj=new person(1137,"Prasad",80000);
  
    obj.dispaly();
