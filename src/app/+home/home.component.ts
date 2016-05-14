import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http, Response} from '@angular/http';
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

    constructor (private http: Http) {}


    private url = 'https://angularattack2016-sayodev.herokuapp.com/board/create';
    private data;

    ngOnInit() {
        this.model = new FormModel();
    }

    new_board() {
        this.http.post(this.url, "{}")
            .subscribe(
                data => this.data = data
            );
        console.log(this.data);
        location.href = "../#new_id";
    }

}
