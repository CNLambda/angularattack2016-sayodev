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
var router_1 = require('@angular/router');
var http_2 = require('@angular/http');
var HomeComponent = (function () {
    function HomeComponent(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://angularattack2016-sayodev.herokuapp.com/board/create';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.new_board = function () {
        var _this = this;
        this.data1 = this.http.post(this.url, "{}")
            .subscribe(function (data) {
            _this.startboard(data.json().board_id);
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('Creating Complete'); });
    };
    HomeComponent.prototype.startboard = function (id) {
        console.log(id);
        //this.router.navigate(['/board', id]); //here!
        window.location.href = "../#" + id;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_2.Http, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map