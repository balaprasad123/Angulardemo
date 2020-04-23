class teacher{
    id:number;
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary;
        
        
    }
     dispaly()
    {
        console.log(" your id :"+this.id+"your name is :"+this.name+" teacher salary  is :"+ this.salary);
    }
   
}
 class student extends teacher{

    constructor(){
        super(1, "prasad",80000);
    }
    assign():any{
        console.log("Teacher assign below calss");
    }
    dis():void{
        console.log(this.id+" Your  id  is :"+this.name+"your  name is:"+this.salary+"salary is");
    }
 }
 var bb=new student();
bb.assign();

bb.dis();