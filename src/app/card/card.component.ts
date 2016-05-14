import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css', '../../css/materialize.min.css']
})
export class CardComponent implements OnInit {

    @Input() card_data;

    constructor() {
        this.title = '';
        this.type = '';
    }

    ngOnInit() {
        var data = JSON.parse(card_data);
        this.title = data.title;
        this.type = data.type;
    }

}
