import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'text-card',
  templateUrl: 'text-card.component.html',
  styleUrls: ['text-card.component.css']
})
export class TextCardComponent implements OnInit {

    @Input() text: string;
    @Input() editing: boolean;
    @Output() on_change: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {
    }

}
