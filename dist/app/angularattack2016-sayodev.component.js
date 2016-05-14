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
var Angularattack2016SayodevAppComponent = (function () {
    function Angularattack2016SayodevAppComponent(router) {
        this.router = router;
        this.title = "BrainShare";
    }
    Angularattack2016SayodevAppComponent.prototype.ngOnInit = function () {
        if (!window.location.href.endsWith("board")) {
            this.router.navigate(['/home']);
        }
    };
    Angularattack2016SayodevAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angularattack2016-sayodev-app',
            templateUrl: 'angularattack2016-sayodev.component.html',
            styleUrls: ['angularattack2016-sayodev.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
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