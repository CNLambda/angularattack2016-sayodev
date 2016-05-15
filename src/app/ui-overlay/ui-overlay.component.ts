import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ui-overlay',
  templateUrl: 'ui-overlay.component.html',
  styleUrls: ['ui-overlay.component.css']
})
export class UiOverlayComponent implements OnInit {

    @Output() toggle_chat: EventEmitter<void> = new EventEmitter<void>();
  
    constructor() {}
  
    ngOnInit() {
    }

}
