import { Component } from '@angular/core';

@Component({
    /* alternative ways to use selectors
    selector: '[app-server]' - select as a property in html tag
    selector: '.app-server' - use it as a class in html
    */
    selector: 'app-server',
    templateUrl: 'server.component.html',
})

export class ServerComponent {


}