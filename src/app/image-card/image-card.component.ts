import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'image-card',
  templateUrl: 'image-card.component.html',
  styleUrls: ['image-card.component.css']
})
export class ImageCardComponent implements OnInit {

    @Input() link: string;
    @Input() editing: boolean;
    @Output() on_change: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}
      
    ngOnInit() {
    }

}
