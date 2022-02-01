import { Component } from '@angular/core';

@Component({
    /* alternative ways to use selectors
    selector: '[app-server]' - select as a property in html tag
    selector: '.app-server' - use it as a class in html
    */
    selector: 'app-serverLogs',
    templateUrl: 'serverLogs.component.html',
})

export class ServerLogsComponent {
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}