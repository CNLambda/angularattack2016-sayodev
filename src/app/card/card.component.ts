import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TextCardComponent } from '../text-card';
import { LinkCardComponent } from '../link-card';
import { ImageCardComponent } from '../image-card';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http, Response} from '@angular/http';
//import { CanvasCardComponent } from '../canvas-card';
//import { FileCardComponent } from '../file-card';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
    directives: [TextCardComponent, LinkCardComponent, ImageCardComponent],
    providers:  [ HTTP_PROVIDERS ]
})
export class CardComponent implements OnInit {

    @Input() data: any;
    @Input() id: number;
    @Output() on_delete: EventEmitter<void> = new EventEmitter<void>();
    public title: string;
    public type: string;
    public color: string;
    public editing: boolean;
    public content: any;

    constructor(private http: Http) {
        this.title = '';
        this.type = 'text';
        this.color = 'white';
        this.editing = false;
        this.content = '...';
    }

    ngOnInit() {
        this.title = this.data.title;
        this.type = this.data.type;
        this.content = this.data.content;
        this.color = this.data.color;
    }

    changeColor(new_color) {
        this.color = new_color;
        
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/edit", JSON.stringify({title: this.title, content: this.content, color: this.color}))
          .subscribe(
                data => {
                },
                err => console.log(err.json().message),
                () => console.log('card done...')
           );
    }
    
    on_change(content: any) {
        this.content = content;
    }

    toggle_edit() {
        this.editing = !this.editing;
        
        if (!this.editing) 
        {
            this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/edit", JSON.stringify({title: this.title, content: this.content, color: this.color}))
              .subscribe(
                    data => {
                    },
                    err => console.log(err.json().message),
                    () => console.log('card done...')
               );
        }
    }
    
    get_id() : string {
        let x = location.href;
        let x2: string[] = x.split("/");
        if (x2[x2.length - 1] == "") {
            return x2[x2.length - 2];
        } else {
            return x2[x2.length - 1];
        }
    }

    delete() {
        console.log("Deleted card " + this.data.server_id);
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/delete", JSON.stringify({}))
          .subscribe(
                data => {
                },
                err => console.log(err.json().message),
                () => console.log('card done...')
           );
        this.on_delete.emit(null);
    }
    
    up() {
        console.log("Priority up: " + this.data.server_id);
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/up", JSON.stringify({}))
          .subscribe(
                data => {
                },
                err => console.log(err.json().message),
                () => console.log('card done...')
           );
    }
    
    down() {
        console.log("Priority up: " + this.data.server_id);
        this.http.post("https://angularattack2016-sayodev.herokuapp.com/board/" + this.get_id() + "/card/" + this.data.server_id + "/down", JSON.stringify({}))
          .subscribe(
                data => {
                },
                err => console.log(err.json().message),
                () => console.log('card done...')
           );
    }

}
