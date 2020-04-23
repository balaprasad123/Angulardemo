import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studenetName=" ";
  rollno="";
  msg="";
  validate="flase";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handlLogin()
{
 if (this.studenetName==="prasad" && this.rollno==="1234567"){
    this.validate="true";
   this.router.navigate(["student",this.studenetName]);
   
 } else {
    
  this.validate="flase";

  this.msg="student name nad roll no is correct";
   
 }    
       

}

}