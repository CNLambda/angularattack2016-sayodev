"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var session_service_1 = require('../session.service');
var ChatComponent = (function () {
    function ChatComponent(session) {
        this.session = session;
        this.id = "";
        this.messages = []; // {mine: bool, username: str, message: str}
        this.close_chat = new core_1.EventEmitter();
    }
    ChatComponent.prototype.get_id = function (x) {
        var x2 = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        }
        else {
            return x2[x2.length - 1];
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.username = this.session.getBoardUsername(this.get_id(window.location.href));
        this.id = this.get_id(window.location.href);
        var ws = new WebSocket("wss://angularattack2016-sayodev.herokuapp.com/message");
        this.ws = ws;
        var this_component = this;
        ws.onopen = function () {
            ws.send(JSON.stringify({ "username": this_component.username, "message": "I'm now online.", "board_id": this_component.id, "join": "true" }));
        };
        // Log errors
        ws.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };
        ws.onmessage = function (event) {
            console.log(event);
            var data = JSON.parse(event.data);
            if (data.from == undefined) {
                data.from = data.username;
            }
            if (data.from == this_component.username) {
                data.mine = true;
            }
            else {
                data.mine = false;
            }
            console.log(data);
            this_component.messages.push(data);
        };
        ws.onclose = function () {
            ws.send(JSON.stringify({ "from": this_component.username, "message": "I'm is going offline.", "board_id": this_component.id }));
        };
    };
    ChatComponent.prototype.send = function () {
        this.ws.send(JSON.stringify({ 'from': this.username, 'message': this.current_msg, "board_id": this.id }));
        this.current_msg = '';
    };
    ChatComponent.prototype.check_send = function (key) {
        if (key == 13) {
            this.send();
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChatComponent.prototype, "close_chat", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat',
            templateUrl: 'chat.component.html',
            styleUrls: ['chat.component.css']
        }), 
        __metadata('design:paramtypes', [session_service_1.SessionService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map