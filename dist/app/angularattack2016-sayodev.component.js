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
var session_service_1 = require('./session.service');
var router_1 = require('@angular/router');
var Angularattack2016SayodevAppComponent = (function () {
    function Angularattack2016SayodevAppComponent(router, session) {
        this.router = router;
        this.session = session;
        this.title = "BrainShare";
        this.session.setBoardUsername("abc", "jonas");
    }
    Angularattack2016SayodevAppComponent.prototype.ngOnInit = function () {
        if (window.location.href.indexOf("#") > -1) {
            this.router.navigate(['/board/' + window.location.href.split("#")[1]]);
        }
        else if (window.location.href.indexOf('board') > -1) {
        }
        else {
            this.router.navigate(['/home']);
        }
        //this.router.navigate(['/home']);
    };
    Angularattack2016SayodevAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angularattack2016-sayodev-app',
            templateUrl: 'angularattack2016-sayodev.component.html',
            styleUrls: ['angularattack2016-sayodev.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, session_service_1.SessionService]
        }),
        router_1.Routes([
            { path: '/home', component: _home_1.HomeComponent },
            { path: '/board/:boardid', component: board_1.BoardComponent },
            { path: '*', component: _home_1.HomeComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, session_service_1.SessionService])
    ], Angularattack2016SayodevAppComponent);
    return Angularattack2016SayodevAppComponent;
}());
exports.Angularattack2016SayodevAppComponent = Angularattack2016SayodevAppComponent;
//# sourceMappingURL=angularattack2016-sayodev.component.js.map