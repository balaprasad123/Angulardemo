import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  username="";
  password="";
  msg = "";
  flag = false;

  
  handleLogin(){
    if (this.username === "admin" && this.password === "admin@123") {
      this.flag = true;
      this.msg = "You have Successfully Logged In";
    } else {
      this.flag = false;
      this.msg = "Invalid  username and  Password ";
    }
  }
}

