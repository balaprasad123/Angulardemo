export class teacher{
    id:number;
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary;

    }
    dispay():any
    {
        console.log(" id :"+this.id+" name :"+this.name+" salary :"+this.salary);
    }

}

   export class studnet extends teacher {
            
   
        constructor(){
            super(1,"bala aala",888555);
        }

    }

   



var ba=new studnet();

ba.dispay();