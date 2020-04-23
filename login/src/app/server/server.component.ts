import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverName = "";
  message = "";
  
  constructor() { }

  ngOnInit() {
  }

  updateLetterCase(event : Event){
    
    console.log(event); 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  handleServer(){
    
    this.message = "Server created successfully and server name is "+this.serverName;
    
 } 

  
}
