import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router';


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
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
export class HomeComponent implements OnInit {

  model: FormModel;

  constructor(public router: Router) {}

  ngOnInit() {
      this.model = new FormModel();
  }

  new_board() {
      this.router.navigate(['/board']);
  }

}
