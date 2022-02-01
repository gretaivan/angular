import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `Auto generated component reusing the existing: <app-server></app-server>

  <label>Server Name</label>
  <input type="text" id="name" class="form-control" [(ngModel)]="serverName">
  <button class="btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button>
  <p>Input value for: {{serverName}}</p>
  <p>{{ serverCreationStatus }}</p>`,
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created'; 
  serverName ='';


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!'; 
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
