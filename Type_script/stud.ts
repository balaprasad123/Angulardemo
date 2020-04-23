export class stud {
    id:number;
    name:string;
    rollno:number;
    constructor(id:number,name:string,rollno) {
        this.id=id;
        this.name=name;
        this.rollno=rollno;

        

    }
    getdata()
    {
        console.log("your id no :"+this.id+"name: "+this.name+"rollno:"+this.rollno);
    }
}

        var  obj= new stud(1137,"Balaprasad",123455);
        
            obj.getdata();
 
