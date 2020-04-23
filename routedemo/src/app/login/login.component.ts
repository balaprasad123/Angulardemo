import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  msg:string= "";
  loginstatus:boolean=false;


  constructor(private route:Router) {}

  ngOnInit() {
  }

  loginmathod(){

    if (this.username === "sai"  && this.password === "sai@123") {

      this.loginstatus=true;
      this.route.navigate(["Your  login is sucessfully"]);




      
    } else {

      this.loginstatus=false;

      this.msg="Your username and password something wrong";
    }
  }

}
