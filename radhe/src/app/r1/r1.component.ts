import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.component.html',
  styleUrls: ['./r1.component.css']
})
export class R1Component implements OnInit {
userName:string ="";
Password:string ="";
massage:string ="";
status:boolean=false;
  
  constructor() { }

  ngOnInit() {

    if (this.userName ==="prasad" && this.Password ==="prasad@123" ) {
      this.status =true;
      this.massage ="Login is successfully ! Welcome"+ this.userName

      
    } else {
      this.status=false;
      this.massage ="invalid username/Password"+this.userName,this.Password;
    }
  }

}
