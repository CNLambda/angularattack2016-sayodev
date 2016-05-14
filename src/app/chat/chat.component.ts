import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

    @Input() opened;

    constructor() {}

    ngOnInit() {
    }

}
