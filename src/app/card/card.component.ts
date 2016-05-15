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

    @Input() data: any;
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
    
    get_id() : string {
        let x = location.href;
        let x2: string[] = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        } else {
            return x2[x2.length - 1];
        }
    }

    delete() {
        console.log("Deleted card " + this.data.server_id);
        this.on_delete.emit(null);
    }

}
