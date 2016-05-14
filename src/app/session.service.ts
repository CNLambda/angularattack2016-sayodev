import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private storage_id = "aa_sayodev_storage";
  private getRawObject(){
    return localStorage.getItem(this.session_id);
  }
  private setRawObject(data){
    localStorage.setItem(this.session_id, data);
  }
  constructor() {
    if(getRawObject() == null){
      setRawObject({});
    }
  }
}
