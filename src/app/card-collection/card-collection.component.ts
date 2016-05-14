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

    cards: string[];

    constructor() {
        this.cards = [];
    }

    ngOnInit() {
    }

    delete(index: number) {
        this.cards.splice(index, 1);
    }

}
