export class DataComp{

     id:number;
    name:string;
    phnumber:number;
   
   constructor(id:number,name:string,phnumber:number){

           this.id=id;
           this. name=name;
            this.phnumber=phnumber;
   }

  

   dispaly():any
   {
       console.log("id =" +this.id + "name is = "+ this.name +"Ph Number =" +this.phnumber);
   }
  
}

var atul =new DataComp(1,"atul araskar",9768782949);

atul.dispaly();