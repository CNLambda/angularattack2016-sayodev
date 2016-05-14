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
var card_1 = require('../card');
var jQuery;
var CardCollectionComponent = (function () {
    function CardCollectionComponent() {
        this.cards = [
            { "title": "Yay!", "type": "image", "content": "..." },
            { "title": "Whoooo!", "type": "text", "content": "..." },
            { "title": "I don't like Angular2", "type": "text", "content": "..." },
            { "title": "I don't like Angular", "type": "text", "content": "..." },
            { "title": "Shit happens.", "type": "text", "content": "..." },
            { "title": "Angular happens.", "type": "text", "content": "..." },
            { "title": "We like jQuery.", "type": "text", "content": "..." },
            { "title": "I like trains.", "type": "text", "content": "..." }
        ];
    }
    CardCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setInterval(function () {
            var collumns = 1;
            var collumn_data = [];
            if (window.matchMedia("(min-width: 3.5in)").matches) {
                collumns = 3;
                collumn_data = [0, 0, 0];
                for (var i = 0; i < _this.cards.length; i++) {
                    var minimum = Infinity;
                    var id = -1;
                    for (var j = 0; j < 3; j++) {
                        if (collumn_data[j] < minimum) {
                            minimum = collumn_data[j];
                            id = j;
                        }
                    }
                    jQuery("#card" + i.toString()).css("position", "absolute");
                    jQuery("#card" + i.toString()).css("width", "30%");
                    jQuery("#card" + i.toString()).css("left", (2 * (id + 1) + 30 * id).toString() + "%");
                    jQuery("#card" + i.toString()).css("top", (8 + minimum).toString() + "px");
                    collumn_data[id] += jQuery("#card" + i.toString()).height();
                    ;
                }
            }
            else {
                for (var i = 0; i < _this.cards.length; i++) {
                    jQuery("#card" + i.toString()).css("position", "relative");
                    jQuery("#card" + i.toString()).css("width", "100%");
                    jQuery("#card" + i.toString()).css("left", "0");
                    jQuery("#card" + i.toString()).css("top", "0");
                }
            }
        }, 100);
    };
    CardCollectionComponent.prototype.delete = function (index) {
        this.cards.splice(index, 1);
    };
    CardCollectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'card-collection',
            templateUrl: 'card-collection.component.html',
            styleUrls: ['card-collection.component.css'],
            directives: [card_1.CardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CardCollectionComponent);
    return CardCollectionComponent;
}());
exports.CardCollectionComponent = CardCollectionComponent;
//# sourceMappingURL=card-collection.component.js.map