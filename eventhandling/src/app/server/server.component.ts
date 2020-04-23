import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  userName="";
  msg="";

  listServer = [];


  constructor() { }

  ngOnInit() {
  }

  Addserver()
  {
    this.msg="server have been added successfully with the name :"+this.userName;
    this.listServer.push(this.userName);

  }
}
