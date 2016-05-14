import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css', '../../css/materialize.min.css']
})
export class CardComponent implements OnInit {

    @Input() data: {"title": string, "type": string, "content": any};
    @Input() id: number;
    @Output() on_delete: EventEmitter<void> = new EventEmitter<void>();
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
        this.title = this.data.title;
        this.type = this.data.type;
        this.content = this.data.content;
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
