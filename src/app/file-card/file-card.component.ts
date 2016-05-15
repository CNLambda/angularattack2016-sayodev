import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'file-card',
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
    
    beautify_link(link: string): string {
        return this.link.split("/")[2];
    }

}
