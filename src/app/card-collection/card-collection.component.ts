import { Component, OnInit, ElementRef } from '@angular/core';
import { CardComponent } from '../card';

@Component({
  moduleId: module.id,
  selector: 'card-collection',
  templateUrl: 'card-collection.component.html',
  styleUrls: ['card-collection.component.css'],
  directives: [CardComponent]
})
export class CardCollectionComponent implements OnInit {

    public cards: {"title": string, "type": string, "content": any}[];
    public card_table: {"title": string, "type": string, "content": any, "id": number}[][];
    public collumns: number;
    public element: ElementRef;

    constructor(myElement: ElementRef) {
        this.cards = [
            {"title": "Yay!","type": "text","content": "Text Nr. 1"},
            {"title": "Whoooo!","type": "text","content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {"title": "I don't like Angular2","type": "link","content": "http://www.google.de"},
            {"title": "I don't like Angular","type": "text","content": "..."},
            {"title": "Shit happens.","type": "text","content": "..."},
            {"title": "Angular happens.","type": "text","content": "..."},
            {"title": "We like jQuery.","type": "text","content": "..."},
            {"title": "I like trains.","type": "text","content": "..."}
        ];
        this.collumns = 1;
        this.element = myElement;
    }

    ngOnInit() {
        let this_component: CardCollectionComponent = this;
        let rtime: number;
        let timeout: boolean = false;
        let delta: number = 300;

        window.addEventListener("resize", function() {
            rtime = (new Date()).valueOf();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }
        });

        function resizeend() {
            if ((new Date()).valueOf() - rtime < delta) {
                setTimeout(resizeend, delta);
            } else {
                timeout = false;
                this_component.reorderCards();
            }
        }

        this.reorderCards();
    }

    reorderCards() {
        let collumn_data: number[] = [];
        if(window.matchMedia("(min-width: 8in)").matches) {
            this.collumns = 3;
            this.card_table = [];
            for (let i: number = 0; i < this.collumns; i++) {
                this.card_table.push([]);
            }
            for (let i: number = 0; i < this.cards.length; i++) {
                let current_card: {"title": string, "type": string, "content": any} = this.cards[i];
                this.card_table[0].push({
                    "title": current_card.title,
                    "type": current_card.type,
                    "content": current_card.content,
                    "id": i
                });
            }
            window.setTimeout(() => {
                let collumn_data: number[] = [];
                for (let i: number = 0; i < this.cards.length; i++) {
                  collumn_data.push(0);
                }
                this.card_table[0] = [];
                for (let i: number = 0; i < this.cards.length; i++) {
                    let minimum: number = Infinity;
                    let id: number = -1;
                    let current_card: {"title": string, "type": string, "content": any};
                    for (let j: number = 0; j < 3; j++) {
                        if (collumn_data[j] < minimum) {
                            minimum = collumn_data[j];
                            id = j;
                        }
                    }
                    current_card = this.cards[i];
                    this.card_table[id].push({
                        "title": current_card.title,
                        "type": current_card.type,
                        "content": current_card.content,
                        "id": i
                    });
                    collumn_data[id] += 12 + this.element.nativeElement.querySelector('.app_card' + i.toString()).offsetHeight;
                }
            }, 100);
        } else {
            this.collumns = 1;
        }
    }

    delete(index: number) {
        this.reorderCards();
        this.cards.splice(index, 1);
    }

}
