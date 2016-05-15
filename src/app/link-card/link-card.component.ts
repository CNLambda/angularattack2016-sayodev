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
    }

}
