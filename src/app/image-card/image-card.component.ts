import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'image-card',
  templateUrl: 'image-card.component.html',
  styleUrls: ['image-card.component.css']
})
export class ImageCardComponent implements OnInit {

    @Input() link: string;
    @Input() editing: boolean;

    constructor() {}

    ngOnInit() {
    }

}
