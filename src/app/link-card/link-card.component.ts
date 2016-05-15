import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Http, Response } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'link-card',
  templateUrl: 'link-card.component.html',
  styleUrls: ['link-card.component.css'],
  providers:  [ HTTP_PROVIDERS ]

})
export class LinkCardComponent implements OnInit {

    @Input() link: string;
    @Input() editing: boolean;
    @Output() on_change: EventEmitter<string> = new EventEmitter<string>();

    constructor(private http: Http) {}

    ngOnInit() {
        if (!this.link.split("/")[0].endsWith(":")) {
            this.link = "http://" + this.link;
        }
    }
    
    beautify_link(link: string): string {
        return this.link.split("/")[2];
    }
    
    getFavicon(link: string){
        let beautified: string = "http://" + this.beautify_link(link) + "/favicon.ico";
        /*if(this.isValid(beautified)) {*/
          return beautified;
        /*} else { 
          return "../empty_image.png";
        }*/
    }
    
    /*isValid(link: string): boolean{
        let return_value: boolean = true;
        this.http.get(link)
            .subscribe(
                data => {
                    return_value = (data.status != 404)
                },
                err => console.log(err.json().message),
                () => console.log('Got info...')
           ); 
        return !return_value; 
    }*/

}
