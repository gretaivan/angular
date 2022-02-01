import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `Auto generated component reusing the existing: <app-server></app-server>
  <button class="btn btn-primary" [disabled]="!allowNewServer" >Add Server</button>`,
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){
  }

}
