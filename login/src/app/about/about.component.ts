import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutName ="";

  constructor() { }
  


  ngOnInit() {
  }

  updateLetterCase(event: Event)
  {
    this.aboutName =(<HTMLInputElement>event.target).value;
  }

}
