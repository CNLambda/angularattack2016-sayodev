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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var UiOverlayComponent = (function () {
    function UiOverlayComponent(http) {
        this.http = http;
        this.toggle_chat = new core_1.EventEmitter();
    }
    UiOverlayComponent.prototype.createCard = function (type) {
        console.log("function called...");
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id(location.href) + "/card/create", JSON.stringify({ "type": type }))
            .subscribe(function (data) {
            console.log(data.json());
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('card done...'); });
    };
    UiOverlayComponent.prototype.get_id = function (x) {
        var x2 = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        }
        else {
            return x2[x2.length - 1];
        }
    };
    UiOverlayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UiOverlayComponent.prototype, "toggle_chat", void 0);
    UiOverlayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ui-overlay',
            templateUrl: 'ui-overlay.component.html',
            styleUrls: ['ui-overlay.component.css'],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_2.Http])
    ], UiOverlayComponent);
    return UiOverlayComponent;
}());
exports.UiOverlayComponent = UiOverlayComponent;
//# sourceMappingURL=ui-overlay.component.js.map