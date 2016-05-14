import { Component, OnInit } from '@angular/core';


export class FormModel {
    public nickname: string

    constructor() {
        this.nickname = '';
    }
}


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  model: FormModel;

  constructor() {}

  ngOnInit() {
      this.model = new FormModel();
  }

  new_board() {
      location.href="../#board"
  }

}
