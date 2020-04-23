import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  validate = false;
  msg = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handlLogin()
  {
     if (this.username==="ajay" && this.password==="ajay@123") {
       this.validate = true;
       this.router.navigate(["welcome",this.username]);
      
     } else {
       this.validate = false;
       this.msg = "Username Or Password Error!";
       
     }
  }
    
  

}
