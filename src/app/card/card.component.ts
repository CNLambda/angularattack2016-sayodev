import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TextCardComponent } from '../text-card';
import { LinkCardComponent } from '../link-card';
import { ImageCardComponent } from '../image-card';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
    directives: [TextCardComponent, LinkCardComponent, ImageCardComponent]
})
export class CardComponent implements OnInit {

    @Input() data: {"title": string, "type": string, "content": any, "color": string};
    @Input() id: number;
    @Output() on_delete: EventEmitter<void> = new EventEmitter<void>();
    public title: string;
    public type: string;
    public color: string;
    public editing: boolean;
    public content: any;

    constructor() {
        this.title = '';
        this.type = 'text';
        this.color = 'white';
        this.editing = false;
        this.content = '...';
    }

    ngOnInit() {
        this.title = this.data.title;
        this.type = this.data.type;
        this.content = this.data.content;
        this.color = this.data.color;
    }

    changeColor(new_color) {
        this.color = new_color;
    }

    toggle_edit() {
        this.editing = !this.editing;
    }

    delete() {
        // console.log("Deleted card " + this.id);
        this.on_delete.emit(null);
    }

}
