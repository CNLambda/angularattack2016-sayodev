import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'ui-overlay',
  templateUrl: 'ui-overlay.component.html',
  styleUrls: ['ui-overlay.component.css'],
  providers:  [ HTTP_PROVIDERS ]
})
export class UiOverlayComponent implements OnInit {

    @Output() toggle_chat: EventEmitter<void> = new EventEmitter<void>();
  
    constructor(private http: Http) {}
  
    private createCard(type: string){
        console.log("function called...");
      this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id(location.href) + "/card/create", JSON.stringify({"type": type}))
          .subscribe(
                data => {
                    console.log(data.json());
                },
                err => console.log(err.json().message),
                () => console.log('card done...')
           );
    }
    
    get_id(x: string) : string {
        let x2: string[] = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        } else {
            return x2[x2.length - 1];
        }
    }
  
    ngOnInit() {
    }

}
