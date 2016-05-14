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
    function CardCollectionComponent(myElement) {
        this.cards = [
            { "title": "Text!", "type": "text", "content": "Card Nr. 1", "color": "white" },
            { "title": "Lorem Ipsum Text!", "type": "text", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "color": "white" },
            { "title": "This is Google.", "type": "link", "content": "http://www.google.de", "color": "white" },
            { "title": "This isn´t Google.", "type": "text", "content": "...", "color": "white" },
            { "title": "Want some more cards?", "type": "text", "content": "...", "color": "white" },
            { "title": "It will happen at some point.", "type": "text", "content": "...", "color": "white" },
            { "title": "Look at those colors!", "type": "text", "content": "...", "color": "white" },
            { "title": "BrainShare", "type": "text", "content": "was made by 3 german students at the age of ~16, who happen to <b>really</b> like coding.", "color": "green" }
        ];
        this.collumns = 1;
        this.element = myElement;
    }
    CardCollectionComponent.prototype.ngOnInit = function () {
        var this_component = this;
        var rtime;
        var timeout = false;
        var delta = 300;
        window.addEventListener("resize", function () {
            rtime = (new Date()).valueOf();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }
        });
        function resizeend() {
            if ((new Date()).valueOf() - rtime < delta) {
                setTimeout(resizeend, delta);
            }
            else {
                timeout = false;
                this_component.reorderCards();
            }
        }
        this.reorderCards();
    };
    CardCollectionComponent.prototype.reorderCards = function () {
        var _this = this;
        var collumn_data = [];
        if (window.matchMedia("(min-width: 8in)").matches) {
            this.collumns = 3;
            this.card_table = [];
            for (var i = 0; i < this.collumns; i++) {
                this.card_table.push([]);
            }
            for (var i = 0; i < this.cards.length; i++) {
                var current_card = this.cards[i];
                this.card_table[0].push({
                    "title": current_card.title,
                    "type": current_card.type,
                    "content": current_card.content,
                    "color": current_card.color,
                    "id": i
                });
            }
            window.setTimeout(function () {
                var collumn_data = [];
                for (var i = 0; i < _this.cards.length; i++) {
                    collumn_data.push(0);
                }
                _this.card_table[0] = [];
                for (var i = 0; i < _this.cards.length; i++) {
                    var minimum = Infinity;
                    var id = -1;
                    var current_card = void 0;
                    for (var j = 0; j < 3; j++) {
                        if (collumn_data[j] < minimum) {
                            minimum = collumn_data[j];
                            id = j;
                        }
                    }
                    current_card = _this.cards[i];
                    _this.card_table[id].push({
                        "title": current_card.title,
                        "type": current_card.type,
                        "content": current_card.content,
                        "color": current_card.color,
                        "id": i
                    });
                    collumn_data[id] += 12 + _this.element.nativeElement.querySelector('.app_card' + i.toString()).offsetHeight;
                }
            }, 100);
        }
        else {
            this.collumns = 1;
        }
    };
    CardCollectionComponent.prototype.delete = function (index) {
        this.cards.splice(index, 1);
        this.reorderCards();
    };
    CardCollectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'card-collection',
            templateUrl: 'card-collection.component.html',
            styleUrls: ['card-collection.component.css'],
            directives: [card_1.CardComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CardCollectionComponent);
    return CardCollectionComponent;
}());
exports.CardCollectionComponent = CardCollectionComponent;
//# sourceMappingURL=card-collection.component.js.map