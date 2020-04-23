import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
mark=0


constructor() { }

ngOnInit() {
}

/*
  contactName="";
  prasad="";

  constructor() { }

  ngOnInit() {
  }

  updateLetterCase(event:Event)
  {
    this.contactName = (<HTMLInputElement>event.target).value;
  }
  
  handleContact()
  {
    this.prasad="Server create is sussesfully and serve name is :"+this.contactName;
  }*/
}

