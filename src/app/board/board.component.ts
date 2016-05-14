import { Component, OnInit } from '@angular/core';
import { CardCollectionComponent } from './card-collection';
import { UiOverlayComponent } from './ui-overlay';
import { ChatComponent } from './chat';
import { UsersComponent } from './users';

@Component({
  moduleId: module.id,
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
  directives: [CardCollectionComponent, UiOverlayComponent, ChatComponent, UsersComponent]
})
export class BoardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
