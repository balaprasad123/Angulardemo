import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = "";
  password :string = "";
  msg:string="";
  loginStatus :boolean=false;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  handlLoin(){
    if (this.username ==="prasad" && this.password === "prasad@123") {
      this.loginStatus=true;
      this.route.navigate(["welcome",this.password]);
      
    } else {
      this.loginStatus =false;
      this.msg="Opps username or password error!";
    }

  }

}
