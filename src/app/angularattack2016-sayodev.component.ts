import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './+home';
import { BoardComponent } from './board';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angularattack2016-sayodev-app',
  templateUrl: 'angularattack2016-sayodev.component.html',
  styleUrls: ['angularattack2016-sayodev.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/board', component: BoardComponent}
])
export class Angularattack2016SayodevAppComponent implements OnInit {

    title = "BrainShare";

    constructor(private router: Router) {}

    ngOnInit() {
        if(!window.location.href.endsWith("board")) {
          this.router.navigate(['/home']);
        }
        
    }

}
