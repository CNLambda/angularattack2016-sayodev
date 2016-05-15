import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-file-card',
  templateUrl: 'file-card.component.html',
  styleUrls: ['file-card.component.css']
})
export class FileCardComponent implements OnInit {

    @Input() link: string;
    @Input() editing: boolean;
    @Output() on_change: EventEmitter<string> = new EventEmitter<string>();
  
    constructor() {}
  
    ngOnInit() {
    }

}
