class teacher{
    salary:number;
    constructor(salary:number){
        this.salary=salary

    }

}
 class stud extends teacher{
     display():void
     {
        console.log("Teaacher's salary is :"+this.salary);
     }
 }
 var prasad= new stud (45000);

    prasad.display();