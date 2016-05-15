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
var CardComponent = (function () {
    function CardComponent() {
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
    };
    CardComponent.prototype.toggle_edit = function () {
        this.editing = !this.editing;
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
        this.on_delete.emit(null);
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
            directives: [text_card_1.TextCardComponent, link_card_1.LinkCardComponent, image_card_1.ImageCardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map