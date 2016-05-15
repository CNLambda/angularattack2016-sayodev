import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

    @Output() close_chat: EventEmitter<void>;
    
    public current_msg: string;
    public username:string = "";
    public id:string = "";
    public messages: any[] = []; // {mine: bool, username: str, message: str}
    public ws: WebSocket;

    constructor(private session: SessionService) {
        this.close_chat = new EventEmitter<void>();
    }
    get_id(x: string) : string {
        let x2: string[] = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        } else {
            return x2[x2.length - 1];
        }
    }
    ngOnInit() {
        this.username = this.session.getBoardUsername(this.get_id(window.location.href));
        this.id = this.get_id(window.location.href);
        var ws = new WebSocket("wss://angularattack2016-sayodev.herokuapp.com/message");
        this.ws = ws;
        
        var this_component = this;
        
        ws.onopen = function () {
              ws.send(JSON.stringify({"username": this_component.username, "message": "I'm now online.", "board_id": this_component.id, "join": "true"})); 
        };

        // Log errors
        ws.onerror = function (error) {
          console.log('WebSocket Error ' + error);
        };
        
        ws.onmessage = function (event) {
            console.log(event);
            var data = JSON.parse(event.data);
            if(data.from == this.username){
                data.mine = true;
            }else {
                data.mine = false;
            }
            this_component.messages.push(data);
        };
        ws.onclose = function() {
            ws.send(JSON.stringify({"from": this_component.username, "message": "I'm is going offline.", "board_id": this_component.id}));
        }
        

    }
    
    send() {
        this.ws.send(JSON.stringify({'from': this.username, 'message': this.current_msg, "board_id": this.id}));
        this.current_msg='';
    }
    
    check_send(key) {
        if (key == 13) {
            this.send();
        }
    }

}
