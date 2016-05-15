import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

    @Output() close_chat: EventEmitter<void>;

    constructor() {
        this.close_chat = new EventEmitter<void>();
    }

    ngOnInit() {
    }

}
