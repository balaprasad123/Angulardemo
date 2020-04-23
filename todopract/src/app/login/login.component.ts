import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username =" ";
  students = Student[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.username =this.route.snapshot.params["name"];
  }
 dispalay()
 {
   this.students =[

     new Student(),


   ]
 }

}
