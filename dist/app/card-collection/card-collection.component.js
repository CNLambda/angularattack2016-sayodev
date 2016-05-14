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
var CardCollectionComponent = (function () {
    function CardCollectionComponent() {
        this.cards = [];
    }
    CardCollectionComponent.prototype.ngOnInit = function () {
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