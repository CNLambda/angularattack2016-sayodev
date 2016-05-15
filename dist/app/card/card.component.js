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
var text_card_1 = require('../text-card');
var link_card_1 = require('../link-card');
var image_card_1 = require('../image-card');
var file_card_1 = require('../file-card');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
//import { CanvasCardComponent } from '../canvas-card';
var CardComponent = (function () {
    function CardComponent(http) {
        this.http = http;
        this.on_delete = new core_1.EventEmitter();
        this.title = '';
        this.type = 'text';
        this.color = 'white';
        this.editing = false;
        this.content = '...';
    }
    CardComponent.prototype.ngOnInit = function () {
        this.title = this.data.title;
        this.type = this.data.type;
        this.content = this.data.content;
        this.color = this.data.color;
    };
    CardComponent.prototype.changeColor = function (new_color) {
        this.color = new_color;
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/edit", JSON.stringify({ title: this.title, content: this.content, color: this.color }))
            .subscribe(function (data) {
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('card done...'); });
    };
    CardComponent.prototype.on_change = function (content) {
        this.content = content;
    };
    CardComponent.prototype.toggle_edit = function () {
        this.editing = !this.editing;
        if (!this.editing) {
            this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/edit", JSON.stringify({ title: this.title, content: this.content, color: this.color }))
                .subscribe(function (data) {
            }, function (err) { return console.log(err.json().message); }, function () { return console.log('card done...'); });
        }
    };
    CardComponent.prototype.get_id = function () {
        var x = location.href;
        var x2 = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        }
        else {
            return x2[x2.length - 1];
        }
    };
    CardComponent.prototype.delete = function () {
        console.log("Deleted card " + this.data.server_id);
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/delete", JSON.stringify({}))
            .subscribe(function (data) {
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('card done...'); });
        this.on_delete.emit(null);
    };
    CardComponent.prototype.up = function () {
        console.log("Priority up: " + this.data.server_id);
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/up", JSON.stringify({}))
            .subscribe(function (data) {
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('card done...'); });
    };
    CardComponent.prototype.down = function () {
        console.log("Priority up: " + this.data.server_id);
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/down", JSON.stringify({}))
            .subscribe(function (data) {
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('card done...'); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CardComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "on_delete", void 0);
    CardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'card',
            templateUrl: 'card.component.html',
            styleUrls: ['card.component.css'],
            directives: [text_card_1.TextCardComponent, link_card_1.LinkCardComponent, image_card_1.ImageCardComponent, file_card_1.FileCardComponent],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_2.Http])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map