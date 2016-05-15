import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './+home';
import { BoardComponent } from './board';
import { SessionService } from './session.service';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angularattack2016-sayodev-app',
  templateUrl: 'angularattack2016-sayodev.component.html',
  styleUrls: ['angularattack2016-sayodev.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, SessionService]
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/board/:boardid', component: BoardComponent},
    {path: '*', component: HomeComponent}
])
export class Angularattack2016SayodevAppComponent implements OnInit {

    title = "BrainShare";
    constructor(private router: Router, private session: SessionService) {
      this.session.setBoardUsername("abc", "jonas");
    }

    ngOnInit() {
        if(window.location.href.indexOf("#") > -1) {
            this.router.navigate(['/board/' + window.location.href.split("#")[1]]);
        } else if (window.location.href.indexOf('board') > -1 ) {
        } else {
            this.router.navigate(['/home']);
        }
        //this.router.navigate(['/home']);
    }

}
