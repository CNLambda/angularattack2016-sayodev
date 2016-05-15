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
var LinkCardComponent = (function () {
    function LinkCardComponent(http) {
        this.http = http;
        this.on_change = new core_1.EventEmitter();
    }
    LinkCardComponent.prototype.ngOnInit = function () {
        if (this.link == null) {
            this.link = "";
        }
        if (!this.link.split("/")[0].endsWith(":")) {
            this.link = "http://" + this.link;
        }
    };
    LinkCardComponent.prototype.beautify_link = function (link) {
        return this.link.split("/")[2];
    };
    LinkCardComponent.prototype.getFavicon = function (link) {
        var beautified = "http://" + this.beautify_link(link) + "/favicon.ico";
        /*if(this.isValid(beautified)) {*/
        return beautified;
        /*} else {
          return "../empty_image.png";
        }*/
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LinkCardComponent.prototype, "link", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LinkCardComponent.prototype, "editing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LinkCardComponent.prototype, "on_change", void 0);
    LinkCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'link-card',
            templateUrl: 'link-card.component.html',
            styleUrls: ['link-card.component.css'],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_2.Http])
    ], LinkCardComponent);
    return LinkCardComponent;
}());
exports.LinkCardComponent = LinkCardComponent;
//# sourceMappingURL=link-card.component.js.map