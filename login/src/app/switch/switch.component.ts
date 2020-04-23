import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

 /* choice='2'
  fruits=['apple','mango','banana'] */

  favourite ='1';
  constructor() { }

  ngOnInit() {
  }

}
