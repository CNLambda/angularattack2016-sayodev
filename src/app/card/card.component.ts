import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css', '../../css/materialize.min.css']
})
export class CardComponent implements OnInit {

    @Input() card_data: string;
    @Input() id: number;
    @Output() on_delete: EventEmitter = new EventEmitter();
    public title: string;
    public type: string;
    public color: string;
    public editing: boolean;
    public content: any;

    constructor() {
        this.title = '';
        this.type = '';
        this.color = 'white';
        this.editing = false;
        this.content = null;
    }

    ngOnInit() {
        var data = JSON.parse(card_data);
        this.title = data.title;
        this.type = data.type;
        this.content = data.content;
    }

    changeColor(new_color) {
        this.color = new_color;
    }

    toggle_edit() {
        this.editing = !this.editing;
    }

    delete() {
        this.on_delete.emit(null);
    }

}
