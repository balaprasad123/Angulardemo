import { Component } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: '.ajay',
  templateUrl: './myapp.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name="Prasad";
  roll_no="111";
  std="graduate";
  from="BCA";

   myAdd = function(x: number, y: number): number { return x + y; };
   mySub = function(a: number, b: number): number{return a - b;};
   
   
}





































































2