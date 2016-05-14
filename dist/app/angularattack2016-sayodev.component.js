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
var _home_1 = require('./+home');
var board_1 = require('./board');
var router_1 = require('@angular/router');
var card_collection_1 = require('./card-collection');
var ui_overlay_1 = require('./ui-overlay');
var chat_1 = require('./chat');
var users_1 = require('./users');
var Angularattack2016SayodevAppComponent = (function () {
    function Angularattack2016SayodevAppComponent(router) {
        this.router = router;
    }
    Angularattack2016SayodevAppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    Angularattack2016SayodevAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angularattack2016-sayodev-app',
            templateUrl: 'angularattack2016-sayodev.component.html',
            styleUrls: ['angularattack2016-sayodev.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, card_collection_1.CardCollectionComponent, ui_overlay_1.UiOverlayComponent, chat_1.ChatComponent, users_1.UsersComponent],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/home', component: _home_1.HomeComponent },
            { path: '/board', component: board_1.BoardComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Angularattack2016SayodevAppComponent);
    return Angularattack2016SayodevAppComponent;
}());
exports.Angularattack2016SayodevAppComponent = Angularattack2016SayodevAppComponent;
//# sourceMappingURL=angularattack2016-sayodev.component.js.map