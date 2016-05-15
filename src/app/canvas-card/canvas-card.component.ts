import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-canvas-card',
  templateUrl: 'canvas-card.component.html',
  styleUrls: ['canvas-card.component.css']
})
export class CanvasCardComponent implements OnInit {
    
    @Input() editing: boolean;
    @Input() data: {"type": string, "data": number[]}[];
    public board_id: string;
      
    constructor(public element: ElementRef) {
        this.board_id = get_id(window.location.href);
    }
  
    get_id(x: string) : string {
        let x2: string[] = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        } else {
            return x2[x2.length - 1];
        }
    }

}
