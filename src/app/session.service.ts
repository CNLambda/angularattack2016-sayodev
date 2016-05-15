import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private storage_id = "aa_sayodev_storage";
  private getRawObject(){
    return JSON.parse(localStorage.getItem(this.storage_id));
  }
  private setRawObject(data){
    localStorage.setItem(this.storage_id, JSON.stringify(data));
  }
  private getValue(key){
    return this.getRawObject()[key];
  }
  private setValue(key, val){
    var obj = this.getRawObject();
    obj[key] = val;
    this.setRawObject(obj);
  }
  public getBoardUsername(boardId){
    if(this.getValue(boardId) == null){
      return null;
    }
    return this.getValue(boardId).username;
  }
  public setBoardUsername(boardId, username){
    if(this.getValue(boardId) == null){
      this.setValue(boardId, {});
    }
    var obj = this.getValue(boardId);
    obj["username"] = username;
    this.setValue(boardId, obj);
  }
  public clear(){
    this.setRawObject({});
  }
  public clearBoardUsername(){
    this.setRawObject({});
  }
  constructor() {
    if(this.getRawObject() == null){
      this.setRawObject({});
    }
  }
}
