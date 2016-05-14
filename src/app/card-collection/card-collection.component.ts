import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card';


var jQuery;


@Component({
  moduleId: module.id,
  selector: 'card-collection',
  templateUrl: 'card-collection.component.html',
  styleUrls: ['card-collection.component.css'],
  directives: [CardComponent]
})
export class CardCollectionComponent implements OnInit {

    cards: {"title": string, "type": string, "content": any}[];

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
        window.setInterval(() => {
            let collumns: number = 1;
            let collumn_data: number[] = [];
            if(window.matchMedia("(min-width: 3.5in)").matches) {
                collumns = 3;
                collumn_data = [0, 0, 0];
                for (let i: number = 0; i < this.cards.length; i++) {
                    let minimum: number = Infinity;
                    let id: number = -1;
                    for (let j: number = 0; j < 3; j++) {
                        if (collumn_data[j] < minimum) {
                            minimum = collumn_data[j];
                            id = j;
                        }
                    }
                    jQuery("#card" + i.toString()).css("position", "absolute");
                    jQuery("#card" + i.toString()).css("width", "30%");
                    jQuery("#card" + i.toString()).css("left",  (2*(id + 1) + 30*id).toString() + "%");
                    jQuery("#card" + i.toString()).css("top", (8 + minimum).toString() + "px");
                    collumn_data[id] += jQuery("#card" + i.toString()).height();;
                }
            } else {
                for (let i: number = 0; i < this.cards.length; i++) {
                    jQuery("#card" + i.toString()).css("position", "relative");
                    jQuery("#card" + i.toString()).css("width", "100%");
                    jQuery("#card" + i.toString()).css("left", "0");
                    jQuery("#card" + i.toString()).css("top", "0");
                }
            }
        }, 100);
    }

    delete(index: number) {
        this.cards.splice(index, 1);
    }

}
