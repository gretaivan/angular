import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `Auto generated component reusing the existing: <app-server></app-server>
  <button class="btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button>
  <p>{{ serverCreationStatus }}</p>`,
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created'; 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server was created!'; 
  }

}
