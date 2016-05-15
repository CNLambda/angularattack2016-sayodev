import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

    @Output() close_chat: EventEmitter<void>;
    
    public messages: any[]; // {mine: bool, from: str, message: str}

    constructor() {
        this.close_chat = new EventEmitter<void>();
    }

    ngOnInit() {
        var ws = new WebSocket("wss://angularattack2016-sayodev.herokuapp.com");
        ws.onopen = function () {
            ws.send('Ping'); // Send the message 'Ping' to the server
        };

        // Log errors
        ws.onerror = function (error) {
          console.log('WebSocket Error ' + error);
        };
        
        ws.onmessage = function (event) {
            console.log(event);
        };
        

    }

}
