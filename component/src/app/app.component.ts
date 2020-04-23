import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';
  Username='prasad';
  Password='prasad';
  add(a:number , b:number){
    return a+b;
  }
  }

