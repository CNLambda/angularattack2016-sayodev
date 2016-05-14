import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card-collection',
  templateUrl: 'card-collection.component.html',
  styleUrls: ['card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {

    cards: string[];

    constructor() {
        this.cards = [];
    }

    ngOnInit() {
    }

    delete(index: number) {
        this.cards.delete(index);
    }

}
