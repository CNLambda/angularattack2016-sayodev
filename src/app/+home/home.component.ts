import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_PROVIDERS } from '@angular/router';
import { Http, Response} from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS ]
})
export class HomeComponent implements OnInit {

    constructor (private http: Http, private router: Router) {}


    private url = 'https://angularattack2016-sayodev.herokuapp.com/board/create';
    private data1;

    ngOnInit() {
    }

    new_board() {
         this.data1 = this.http.post(this.url, "{}")
         .subscribe(
            data => {
                this.startboard(data.json().board_id);
                },
                err => console.log(err.json().message),
                () => console.log('Creating Complete')
            );
    }


    startboard(id) {
        console.log(id);
        //this.router.navigate(['/board', id]); //here!
        window.location.href = "../#" + id;
    }

}
