import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:String = "";
  msg:String = "";
  status:boolean = false;
  constructor(private route : Router) { }

  ngOnInit() {
  }

  handleLogin(){
   if (this.username === "ajay" && this.password === "ajay@123")  {
    this.status = true;
    this.route.navigate(["welcome",this.username]);
   } else {
     this.status = false;
     this.msg = "Username Or Password error!";
   } 
  }
}
