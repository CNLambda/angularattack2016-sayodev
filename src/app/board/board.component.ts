import { Component, OnInit } from '@angular/core';
import { CardCollectionComponent } from '../card-collection';
import { UiOverlayComponent } from '../ui-overlay';
import { ChatComponent } from '../chat';

@Component({
  moduleId: module.id,
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
  directives: [CardCollectionComponent, UiOverlayComponent, ChatComponent]
})
export class BoardComponent implements OnInit {

  public chat_opened: boolean;

  constructor() {}

  ngOnInit() {
  }
  
  toggleChat() {
      this.chat_opened = ! this.chat_opened;
  }
  
  closeChat() {
      this.chat_opened = false;
  }

}
