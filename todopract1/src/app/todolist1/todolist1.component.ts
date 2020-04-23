import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist1',
  templateUrl: './todolist1.component.html',
  styleUrls: ['./todolist1.component.css']
})
export class Todolist1Component implements OnInit {

  student =[];
  constructor() { }

  ngOnInit() {
  }
       display()
       {
         console.log("Enter");
         this.student = [
           {
             id:1,
             name:"Ajay",
             age:22,
             division:"A"
           },
           {
            id:2,
            name:"Atul",
            age:23,
            division:"B",
          },
          {
            id:3,
            name:"Balaprasad",
            age:24,
            division:"C",
          },
          {
            id:5,
            name:"Sagar",
            age:21,
            division:"D",
          }
         ]
       }           
}
