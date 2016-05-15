import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'link-card',
  templateUrl: 'link-card.component.html',
  styleUrls: ['link-card.component.css']
})
export class LinkCardComponent implements OnInit {

    @Input() link: string;
    @Input() editing: boolean;
    @Output() on_change: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {
        if (!this.link.split("/")[0].endsWith(":")) {
            this.link = "http://" + this.link;
        }
    }
    
    beautify_link(link: string): string {
        return this.link.split("/")[2];
    }

}
