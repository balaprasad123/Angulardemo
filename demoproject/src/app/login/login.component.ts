import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  message:string = "";
  loginStatus:boolean = false;
  
  constructor(private route:Router) { }

  ngOnInit() {
  }
 
  handleLogin(){
    if (this.username === "admin" && this.password === "admin@123") {
      this.loginStatus = true;
      this.route.navigate(["welcome",this.password]);  
    } else {
      this.loginStatus = false;
      this.message = "Opps Username Or Password error! "
    }
  }
}
