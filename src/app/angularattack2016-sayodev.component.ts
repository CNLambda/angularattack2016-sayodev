import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { CardCollectionComponent } from './card-collection';
import { UiOverlayComponent } from './ui-overlay';
import { ChatComponent } from './chat';
import { UsersComponent } from './users';

@Component({
  moduleId: module.id,
  selector: 'angularattack2016-sayodev-app',
  templateUrl: 'angularattack2016-sayodev.component.html',
  styleUrls: ['angularattack2016-sayodev.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent}
])
export class Angularattack2016SayodevAppComponent {
  title = 'angularattack2016-sayodev works!';
}
