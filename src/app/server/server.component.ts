import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styleUrls: ['server.component.css']
})
export class ServerComponent {
    id = 10;
    status = 'offline';

    getServerStatus(): string {
        return this.status;
    }
}
