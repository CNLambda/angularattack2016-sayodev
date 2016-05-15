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
var session_service_1 = require('../session.service');
var card_1 = require('../card');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
/*@Microsoft(){
//   hack = true
//   rootpass = "microsoft"
//   rootname = "root"
//   deleteallWin = true
//   replaceWith = "Linux" //should we replaceWith = "Chrome OS" to get 1st place ? ^^
}*/
var CardCollectionComponent = (function () {
    function CardCollectionComponent(myElement, http, session) {
        var _this = this;
        this.myElement = myElement;
        this.http = http;
        this.session = session;
        this.url = 'https://angularattack2016-sayodev.herokuapp.com/board/';
        this.name = "";
        this.cards = [];
        setInterval(function () {
            _this.getInfo();
        }, 500);
        /* this.cards = [
            {"title": "Text!","type": "text","content": "Card Nr. 1","color":"white"},
            {"title": "Lorem Ipsum Text!","type": "text","content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","color":"white"},
            {"title": "This is Google.","type": "link","content": "http://www.google.de","color":"white"},
            {"title": "This isn´t Google.","type": "link","content": "http://www.angular.io/","color":"white"},
            {"title": "Want some more cards?","type": "image","content": "http://images.all-free-download.com/images/graphiclarge/check_mark_clip_art_11058.jpg","color":"white"},
            {"title": "It will happen at some point.","type": "text","content": "...","color":"white"},
            {"title": "Look at those colors!","type": "text","content": "...","color":"white"},
            {"title": "BrainShare","type": "text","content": "is cool.","color":"green"}
        ]; */
        this.collumns = 1;
        this.element = myElement;
    }
    CardCollectionComponent.prototype.getInfo = function () {
        var _this = this;
        this.data = this.http.get(this.url + this.get_id(location.href) + "/getInfo")
            .subscribe(function (data) {
            var new_ = data.json().cards;
            if (JSON.stringify(new_) != JSON.stringify(_this.cards)) {
                _this.cards = new_;
                _this.reorderCards();
            }
        }, function (err) { return console.log(err.json().message); }, function () { return console.log('Got info...'); });
    };
    CardCollectionComponent.prototype.get_id = function (x) {
        var x2 = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        }
        else {
            return x2[x2.length - 1];
        }
    };
    CardCollectionComponent.prototype.setName = function () {
        if (this.name == "") {
            return;
        }
        this.session.setBoardUsername(this.get_id(location.href), this.name);
        var x = this.element.nativeElement.querySelector('.del');
        x.parentNode.removeChild(x);
    };
    CardCollectionComponent.prototype.ngOnInit = function () {
        var this_component = this;
        var rtime;
        var timeout = false;
        var delta = 300;
        var x = this.element.nativeElement.querySelector('.del');
        if (this.session.getBoardUsername(this.get_id(location.href))) {
            x.parentNode.removeChild(x);
        }
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
            window.setTimeout(function () {
                var collumn_data = [];
                for (var i = 0; i < _this.cards.length; i++) {
                    collumn_data.push(0);
                }
                _this.card_table = [];
                for (var i = 0; i < _this.collumns; i++) {
                    _this.card_table.push([]);
                }
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
                    //collumn_data[id] += 12 + this.element.nativeElement.querySelector('.app_card' + i.toString()).offsetHeight;
                    var x = document.getElementsByClassName('app_card' + i.toString())[0];
                    collumn_data[id] += 12 + x.offsetHeight;
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
            directives: [card_1.CardComponent],
            providers: [http_1.HTTP_PROVIDERS, session_service_1.SessionService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, http_2.Http, session_service_1.SessionService])
    ], CardCollectionComponent);
    return CardCollectionComponent;
}());
exports.CardCollectionComponent = CardCollectionComponent;
//# sourceMappingURL=card-collection.component.js.map