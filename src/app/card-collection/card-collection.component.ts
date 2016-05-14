import { Component, OnInit } from '@angular/core';
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

    constructor() {
        this.cards = [
            {"title": "Yay!","type": "image","content": "..."},
            {"title": "Whoooo!","type": "text","content": "..."},
            {"title": "I don't like Angular2","type": "text","content": "..."},
            {"title": "I don't like Angular","type": "text","content": "..."},
            {"title": "Shit happens.","type": "text","content": "..."},
            {"title": "Angular happens.","type": "text","content": "..."},
            {"title": "We like jQuery.","type": "text","content": "..."},
            {"title": "I like trains.","type": "text","content": "..."}
        ];
        this.collumns = 3;
    }

    ngOnInit() {
        let this_component: CardCollectionComponent = this;
        let rtime: number;
        let timeout: boolean = false;
        let delta: number = 300;

        document.addEventListener("resize", function() {
            let date: any = new Date();
            rtime = date.now();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }
        });

        function resizeend() {
            let date: any = new Date();
            if (date.now() - rtime < delta) {
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
        if(window.matchMedia("(min-width: 3in)").matches) {
            this.collumns = 3;
            this.card_table = [];
            for (let i: number = 0; i < this.collumns; i++) {
                this.card_table.push([]);
            }
            window.setTimeout(() => {
                for (let i: number = 0; i < this.cards.length; i++) {
                    let minimum: number = Infinity;
                    let id: number = -1;
                    let current_card: {"title": string, "type": string, "content": any};
                    for (let j: number = 0; j < 3; j++) {
                        console.log("#collumn" + (j).toString());
                        var current_height = document.getElementById("#collumn" + (j).toString()).offsetHeight;
                        if (current_height < minimum) {
                            minimum = current_height;
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
