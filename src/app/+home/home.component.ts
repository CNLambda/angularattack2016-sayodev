import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

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
    private url = 'https://angularattack2016-sayodev.herokuapp.com/board/create';
    constructor(private http: Http) {}

    ngOnInit() {
        this.model = new FormModel();
    }

    new_board() {


this.http.post(this.url)

         .toPromise()

         .then(res => {
            if(res.ok){
                console.log(res.text());
            }

          })

         .catch(err => {

            // Do some Fehlerbehandlung.

          });


        location.href = "../#new_id";
    }

}
