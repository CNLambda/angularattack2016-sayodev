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
    public card_table: {"title": string, "type": string, "content": any}[][];
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
    }

    ngOnInit() {
        let this_component: CardCollectionComponent = this;
        var rtime: number;
        let timeout: boolean = false;
        let delta: number = 300;

        document.addEventListener("resize", function() {
            rtime = (new Date()).now();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }
        });

        function resizeend() {
            if ((new Date()).now() - rtime < delta) {
                setTimeout(resizeend, delta);
            } else {
                timeout = false;
                this_component.reorderCards();
            }
        }
    }

    reorderCards() {
        let collumn_data: number[] = [];
        if(window.matchMedia("(min-width: 3in)").matches) {
            this.collumns = 3;
            this.card_table = [];
            for (let i: number = 0; i < this.collumns; i++) {
                this.card_table.push([]);
            }
            for (let i: number = 0; i < this.cards.length; i++) {
                let minimum: number = Infinity;
                let id: number = -1;
                for (let j: number = 0; j < 3; j++) {
                    var current_height = document.getElementById("#collumn" + j.toString()).offsetHeight;
                    if (current_height < minimum) {
                        minimum = current_height;
                        id = j;
                    }
                }
                this.card_table[id].push(this.cards[id]);
            }
        } else {
            this.collumns = 1;
        }
    }

    delete(index: number) {
        this.reorderCards();
        this.cards.splice(index, 1);
    }

}
