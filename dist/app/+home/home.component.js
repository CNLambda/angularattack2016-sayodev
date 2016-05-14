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
var FormModel = (function () {
    function FormModel() {
        this.nickname = '';
    }
    return FormModel;
}());
exports.FormModel = FormModel;
var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.url = 'https://angularattack2016-sayodev.herokuapp.com/board/create';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.model = new FormModel();
    };
    HomeComponent.prototype.new_board = function () {
        var _this = this;
        this.http.post(this.url, "{}")
            .subscribe(function (data) { return _this.data = data; });
        console.log(this.data);
        location.href = "../#" + this.data;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_2.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map