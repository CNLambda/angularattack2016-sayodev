import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './+home';
import { BoardComponent } from './board';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { CardCollectionComponent } from './card-collection';
import { UiOverlayComponent } from './ui-overlay';
import { ChatComponent } from './chat';
import { UsersComponent } from './users';

@Component({
  moduleId: module.id,
  selector: 'angularattack2016-sayodev-app',
  templateUrl: 'angularattack2016-sayodev.component.html',
  styleUrls: ['angularattack2016-sayodev.component.css'],
  directives: [ROUTER_DIRECTIVES, CardCollectionComponent, UiOverlayComponent, ChatComponent, UsersComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/board', component: BoardComponent}
])
export class Angularattack2016SayodevAppComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/home']);
    }

}
