import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Hey bala i am a babu! ';
  constructor() { }

  ngOnInit() {
    console.log(this.message);
  }

}
