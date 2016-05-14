import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private storage_id = "aa_sayodev_storage";
  private getRawObject(){
    return localStorage.getItem(this.storage_id);
  }
  private setRawObject(data){
    localStorage.setItem(this.storage_id, data);
  }
  constructor() {
    if(this.getRawObject() == null){
      this.setRawObject({});
    }
  }
}
