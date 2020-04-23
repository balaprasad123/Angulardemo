import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  serverName="";

  msg="";

  listServer = [];

  
  constructor() { }

  ngOnInit() {
  }

  Server2()
  {
    this.msg="server have been added successfully with the name :"+this.serverName;
    this.listServer.push(this.serverName);

  }
}
