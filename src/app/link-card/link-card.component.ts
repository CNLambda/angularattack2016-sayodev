import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'link-card',
  templateUrl: 'link-card.component.html',
  styleUrls: ['link-card.component.css']
})
export class LinkCardComponent implements OnInit {

    @Input() link: string;
    @Input() editing: boolean;

    constructor() {}

    ngOnInit() {
    }

}
