import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-text-card',
  templateUrl: 'text-card.component.html',
  styleUrls: ['text-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input() text: string;
  @Input() editing: boolean;

  constructor() {}

  ngOnInit() {
  }

}
